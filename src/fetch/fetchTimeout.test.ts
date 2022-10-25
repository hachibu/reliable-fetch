import fetchMock from 'jest-fetch-mock'
import fetchTimeout from './fetchTimeout'
import { describe, expect, it } from '@jest/globals'
import { fetchMockResponseWithDelay, DEFAULT_DELAY } from '../../jest.helpers'

jest.spyOn(global, 'setTimeout')
jest.spyOn(global, 'clearTimeout')

describe('fetchTimeout', () => {
    const input = 'http://localhost'

    beforeEach(() => fetchMockResponseWithDelay())

    it('aborts if timeout completes first', async () => {
        const timeout = DEFAULT_DELAY / 2

        fetchMock.mockAbort()
        await expect(fetchTimeout(input, { timeout })).rejects.toThrow()

        expect(fetch).toBeCalledTimes(1)
        expect(setTimeout).toBeCalledTimes(1)
        expect(clearTimeout).toBeCalledTimes(1)
    })

    it('does not abort if request completes first', async () => {
        const timeout = DEFAULT_DELAY * 2

        await expect(fetchTimeout(input, { timeout })).resolves.not.toThrow()

        expect(fetch).toBeCalledTimes(1)
        expect(setTimeout).toBeCalledTimes(2)
        expect(clearTimeout).toBeCalledTimes(1)
    })
})
