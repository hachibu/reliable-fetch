import { describe, expect, it } from '@jest/globals'
import fetchTimeout from './fetchTimeout'
import { fetchMockResponseWithDelay, DEFAULT_WAIT } from '../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchTimeout', () => {
    beforeEach(() => fetchMockResponseWithDelay())

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
