import { describe, expect, it } from '@jest/globals'
import fetchHedge from './fetchHedge'
import { fetchMockResponseWithWait, DEFAULT_WAIT } from '../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchHedge', () => {
    beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.doMock()
        fetchMockResponseWithWait(DEFAULT_WAIT)
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it('calls fetch once if first call resolves within timeout ', async () => {
        await expect(
            fetchHedge('', { timeout: DEFAULT_WAIT * 2 })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('calls fetch twice if first call aborts', async () => {
        fetchMock.mockAbort()
        await expect(
            fetchHedge('', { timeout: DEFAULT_WAIT / 2 })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(2)
    })

    it('throws on first call if error is not AbortError', async () => {
        fetchMock.mockReject(new Error())
        await expect(
            fetchHedge('', { timeout: DEFAULT_WAIT * 2 })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })
})
