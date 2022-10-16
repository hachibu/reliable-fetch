import { describe, expect, it } from '@jest/globals'
import fetchRetry from './fetchRetry'
import { fetchMockResponseWithDelay, DEFAULT_DELAY } from '../../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchRetry', () => {
    it('resolves without retry', async () => {
        const maxRetries = 3
        fetchMockResponseWithDelay()
        await expect(
            fetchRetry('', {
                delayBetweenRetries: DEFAULT_DELAY / 2,
                maxRetries,
            })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('retries fetch with linear delay', async () => {
        const maxRetries = 3
        fetchMockResponseWithDelay()
        fetchMock.mockAbort()
        await expect(
            fetchRetry('', {
                delayBetweenRetries: DEFAULT_DELAY / 2,
                maxRetries,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(maxRetries + 1)
    })

    it('retries fetch with exponential delay', async () => {
        const maxRetries = 3
        fetchMockResponseWithDelay(1)
        fetchMock.mockAbort()
        await expect(
            fetchRetry('', {
                strategy: 'exponential',
                delayBetweenRetries: 1,
                maxRetries,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(maxRetries + 1)
    })
})
