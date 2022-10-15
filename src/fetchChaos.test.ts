import { describe, expect, it } from '@jest/globals'
import { fetchMockResponseWithDelay } from '../jest.helpers'
import fetchChaos from './fetchChaos'
import { ChaosError } from './errors'

describe('fetchChaos', () => {
    beforeEach(() => fetchMockResponseWithDelay(10))

    const table = [[0.1], [0.5], [0.9]]

    it.each(table)('%s of requests fail', async (failureRate) => {
        const requestCount = 100
        let failedRequestCount = 0

        for (let i = 0; i < requestCount; i++) {
            try {
                await fetchChaos('', { failureRate })
            } catch (error) {
                if (error instanceof ChaosError) {
                    failedRequestCount++
                } else {
                    throw error
                }
            }
        }
        let failedRequestRatio = failedRequestCount / requestCount

        expect(failedRequestRatio).toBeLessThanOrEqual(failureRate + 0.1)
    })
})
