import { describe, expect, it } from '@jest/globals'
import fetchRetry from './fetchRetry'
import { fetchMockResponseWithDelay, DEFAULT_DELAY } from '../../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchRetry', () => {
    it('resolves without retry', async () => {
        const retries = 3
        fetchMockResponseWithDelay()
        await expect(
            fetchRetry('', {
                delay: DEFAULT_DELAY / 2,
                retries,
            })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('retries fetch with linear delay', async () => {
        const retries = 3
        fetchMockResponseWithDelay()
        fetchMock.mockAbort()
        await expect(
            fetchRetry('', {
                delay: DEFAULT_DELAY / 2,
                retries,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(retries + 1)
    })

    it('retries fetch with exponential delay', async () => {
        const retries = 3
        fetchMockResponseWithDelay(1)
        fetchMock.mockAbort()
        await expect(
            fetchRetry('', {
                backoff: 'exponential',
                delay: 1,
                retries,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(retries + 1)
    })
})
