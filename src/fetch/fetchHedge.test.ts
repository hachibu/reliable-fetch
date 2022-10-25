import { describe, expect, it } from '@jest/globals'
import fetchHedge from './fetchHedge'
import { fetchMockResponseWithDelay, DEFAULT_DELAY } from '../../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchHedge', () => {
    const input = 'http://localhost'

    beforeEach(() => fetchMockResponseWithDelay())

    it('calls fetch once if first call resolves within timeout ', async () => {
        await expect(
            fetchHedge(input, { timeout: DEFAULT_DELAY * 2 })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('calls fetch twice if first call aborts', async () => {
        await expect(
            fetchHedge(input, { timeout: DEFAULT_DELAY / 2 })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(2)
    })

    it('throws on first call if error is not AbortError', async () => {
        fetchMock.mockReject(new Error())
        await expect(
            fetchHedge(input, { timeout: DEFAULT_DELAY * 2 })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })
})
