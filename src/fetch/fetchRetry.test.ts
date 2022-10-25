import { describe, expect, it } from '@jest/globals'
import fetchRetry from './fetchRetry'
import { fetchMockResponseWithDelay, DEFAULT_DELAY } from '../../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchRetry', () => {
    const input = 'http://localhost'
    const attempts = 3

    it('resolves without retry', async () => {
        fetchMockResponseWithDelay()

        await expect(
            fetchRetry(input, {
                attempts,
                delay: DEFAULT_DELAY / 2,
            })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('retries with constant delay', async () => {
        fetchMockResponseWithDelay()
        fetchMock.mockAbort()

        await expect(
            fetchRetry(input, {
                attempts,
                delay: DEFAULT_DELAY / 2,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(attempts + 1)
    })

    it('retries with exponential delay', async () => {
        fetchMockResponseWithDelay(1)
        fetchMock.mockAbort()

        await expect(
            fetchRetry(input, {
                attempts,
                delay: 1,
                backoff: 'exponential',
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(attempts + 1)
    })

    it('defaults config values', async () => {
        fetchMockResponseWithDelay(1)
        fetchMock.mockAbort()

        await expect(fetchRetry(input)).rejects.toThrow()
        expect(fetch).toBeCalledTimes(2)
    })
})
