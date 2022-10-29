import fetchMock from 'jest-fetch-mock'
import fetchTimeout from './fetchTimeout'
import { describe, expect, it } from '@jest/globals'
import { mockResponse } from '../../jest.helpers'

jest.spyOn(global, 'setTimeout')
jest.spyOn(global, 'clearTimeout')

describe('fetchTimeout', () => {
    const input = 'http://localhost'

    beforeEach(() => fetchMock.mockResponse(mockResponse()))

    it('aborts if timeout completes first', async () => {
        const timeout = 50

        fetchMock.mockAbort()
        await expect(fetchTimeout(input, { timeout })).rejects.toThrow()

        expect(fetch).toBeCalledTimes(1)
        expect(setTimeout).toBeCalledTimes(1)
        expect(clearTimeout).toBeCalledTimes(1)
    })

    it('does not abort if request completes first', async () => {
        const timeout = 200

        await expect(fetchTimeout(input, { timeout })).resolves.not.toThrow()

        expect(fetch).toBeCalledTimes(1)
        expect(setTimeout).toBeCalledTimes(2)
        expect(clearTimeout).toBeCalledTimes(1)
    })
})
