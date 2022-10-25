import fetchChaos from './fetchChaos'
import { ReliableFetchChaosError } from '../errors'
import { describe, expect, it } from '@jest/globals'
import { fetchMockResponseWithDelay } from '../../jest.helpers'

describe('fetchChaos', () => {
    beforeEach(() => fetchMockResponseWithDelay(10))

    const input = 'http://localhost'
    const table = [[0.1], [0.5], [0.9]]

    it.concurrent.each(table)('aborts %s of requests', async (rate) => {
        const requestCount = 100
        let failedRequestCount = 0

        for (let i = 0; i < requestCount; i++) {
            try {
                await fetchChaos(input, { rate })
            } catch (error) {
                if (error instanceof ReliableFetchChaosError) {
                    failedRequestCount++
                } else {
                    throw error
                }
            }
        }
        let failedRequestRatio = failedRequestCount / requestCount

        expect(failedRequestRatio).toBeLessThanOrEqual(rate + 0.2)
    })

    it('throws an error when failure rate is invalid', async () => {
        try {
            await fetchChaos(input, { rate: 10 })
        } catch (error) {
            expect(error).toBeInstanceOf(RangeError)
        }
    })
})
