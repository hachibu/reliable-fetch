import { describe, expect, it } from '@jest/globals'
import fetchRetry from './fetchRetry'
import { fetchMockResponseWithWait, DEFAULT_WAIT } from '../jest.helpers'

describe('fetchRetry', () => {
    beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.doMock()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it('resolves without retry', async () => {
        const retries = 3
        fetchMockResponseWithWait(DEFAULT_WAIT)
        await expect(
            fetchRetry('', {
                timeout: DEFAULT_WAIT / 2,
                retries,
            })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('retries fetch with linear timeout', async () => {
        const retries = 3
        fetchMockResponseWithWait(DEFAULT_WAIT)
        fetchMock.mockAbort()
        await expect(
            fetchRetry('', {
                timeout: DEFAULT_WAIT / 2,
                retries,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(retries + 1)
    })

    it('retries fetch with exponential timeout', async () => {
        const retries = 3
        fetchMockResponseWithWait(1)
        fetchMock.mockAbort()
        await expect(
            fetchRetry('', {
                backoff: 'exponential',
                timeout: 0,
                retries,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(retries + 1)
    })
})
