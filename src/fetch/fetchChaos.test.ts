import fetchChaos from './fetchChaos'
import { RandomChaosError } from '../errors'
import { describe, expect, it } from '@jest/globals'
import { fetchMockResponseWithDelay } from '../../jest.helpers'

describe('fetchChaos', () => {
    beforeEach(() => fetchMockResponseWithDelay(10))

    const input = 'https://localhost'
    const table = [[0.1], [0.5], [0.9]]

    it.concurrent.each(table)('aborts %s of requests', async (failureRate) => {
        const requestCount = 100
        let failedRequestCount = 0

        for (let i = 0; i < requestCount; i++) {
            try {
                await fetchChaos(input, { failureRate })
            } catch (error) {
                if (error instanceof RandomChaosError) {
                    failedRequestCount++
                } else {
                    throw error
                }
            }
        }
        let failedRequestRatio = failedRequestCount / requestCount

        expect(failedRequestRatio).toBeLessThanOrEqual(failureRate + 0.1)
    })

    it('throws an error when failure rate is invalid', async () => {
        try {
            await fetchChaos(input, { failureRate: 10 })
        } catch (error) {
            expect(error).toBeInstanceOf(RangeError)
        }
    })
})
