import { describe, expect, it } from '@jest/globals'
import fetchRetry from './fetchRetry'
import { fetchMockResponseWithDelay, DEFAULT_DELAY } from '../../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchRetry', () => {
    const input = 'https://localhost'

    it('resolves without retry', async () => {
        const retries = 3

        fetchMockResponseWithDelay()

        await expect(
            fetchRetry(input, {
                delay: DEFAULT_DELAY / 2,
                retries,
            })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('retries with constant delay', async () => {
        const retries = 3

        fetchMockResponseWithDelay()
        fetchMock.mockAbort()

        await expect(
            fetchRetry(input, {
                delay: DEFAULT_DELAY / 2,
                retries,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(retries + 1)
    })

    it('retries with exponential delay', async () => {
        const retries = 3

        fetchMockResponseWithDelay(1)
        fetchMock.mockAbort()

        await expect(
            fetchRetry(input, {
                delay: 1,
                retries,
                strategy: 'exponential',
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(retries + 1)
    })

    it('defaults config values', async () => {
        fetchMockResponseWithDelay(1)
        fetchMock.mockAbort()

        await expect(fetchRetry(input)).rejects.toThrow()
        expect(fetch).toBeCalledTimes(2)
    })
})
