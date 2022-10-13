import { describe, expect, it } from '@jest/globals'
import { fetchMockResponseWithWait } from '../jest.helpers'
import fetchMock from 'jest-fetch-mock'
import fetchChaos from './fetchChaos'
import { ChaosError } from './errors'

describe('fetchHedge', () => {
    beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.doMock()
        fetchMockResponseWithWait(10)
    })

    afterEach(() => {
        jest.useRealTimers()
    })

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
