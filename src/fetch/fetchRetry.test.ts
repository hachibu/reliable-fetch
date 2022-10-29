import { describe, expect, it } from '@jest/globals'
import fetchRetry from './fetchRetry'
import { mockResponse } from '../../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchRetry', () => {
    const input = 'http://localhost'
    const attempts = 3

    beforeEach(() => fetchMock.mockResponse(mockResponse()))

    it('resolves without retry', async () => {
        await expect(
            fetchRetry(input, {
                attempts,
                delay: 50,
            })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('retries with constant delay', async () => {
        fetchMock.mockAbort()

        await expect(
            fetchRetry(input, {
                attempts,
                delay: 50,
            })
        ).rejects.toThrow()
        expect(fetch).toBeCalledTimes(attempts + 1)
    })

    it('retries with exponential delay', async () => {
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
        fetchMock.mockAbort()

        await expect(fetchRetry(input)).rejects.toThrow()
        expect(fetch).toBeCalledTimes(2)
    })
})
