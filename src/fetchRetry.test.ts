import { describe, expect, it } from '@jest/globals'
import fetchRetry from './fetchRetry'
import { fetchMockResponseWithWait, DEFAULT_WAIT } from '../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchRetry', () => {
    it('resolves without retry', async () => {
        const retries = 3
        fetchMockResponseWithWait()
        await expect(
            fetchRetry('', {
                delay: DEFAULT_WAIT / 2,
                retries,
            })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('retries fetch with linear delay', async () => {
        const retries = 3
        fetchMockResponseWithWait()
        fetchMock.mockAbort()
        await expect(
            fetchRetry('', {
                delay: DEFAULT_WAIT / 2,
                retries,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(retries + 1)
    })

    it('retries fetch with exponential delay', async () => {
        const retries = 3
        fetchMockResponseWithWait(1)
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
