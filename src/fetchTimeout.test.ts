import { describe, expect, it } from '@jest/globals'
import fetchTimeout from './fetchTimeout'
import { fetchMockResponseWithWait, DEFAULT_WAIT } from '../jest.helpers'

describe('fetchTimeout', () => {
    beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.doMock()
        fetchMockResponseWithWait()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it('rejects within timeout', async () => {
        fetchMock.mockAbort()
        await expect(
            fetchTimeout('', { timeout: DEFAULT_WAIT / 2 })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('resolves within timeout', async () => {
        await expect(
            fetchTimeout('', { timeout: DEFAULT_WAIT * 2 })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('resolves without timeout', async () => {
        await expect(fetchTimeout('')).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })
})
