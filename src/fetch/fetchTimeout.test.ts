import { ReliableRequestInit } from '../types'
import fetchMock from 'jest-fetch-mock'
import fetchTimeout from './fetchTimeout'
import { describe, expect, it } from '@jest/globals'
import { mockResponse } from '../../jest.helpers'

jest.spyOn(global, 'setTimeout')
jest.spyOn(global, 'clearTimeout')

describe('fetchTimeout', () => {
    const input = 'http://localhost'

    beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.mockResponse(mockResponse())
    })

    it('aborts if timeout completes first', async () => {
        const init: ReliableRequestInit = {
            timeout: 50,
        }

        fetchMock.mockAbort()
        await expect(fetchTimeout(input, init)).rejects.toThrow()

        expect(fetch).toBeCalledTimes(1)
        expect(fetch).toBeCalledWith(
            input,
            expect.objectContaining({
                timeout: init.timeout,
            })
        )
        expect(setTimeout).toBeCalledTimes(1)
        expect(setTimeout).toBeCalledWith(expect.anything(), init.timeout)
        expect(clearTimeout).toBeCalledTimes(1)
    })

    it('does not abort if request completes first', async () => {
        const init: ReliableRequestInit = {
            timeout: 200,
        }

        await expect(fetchTimeout(input, init)).resolves.not.toThrow()

        expect(fetch).toBeCalledTimes(1)
        expect(fetch).toBeCalledWith(
            input,
            expect.objectContaining({
                timeout: init.timeout,
            })
        )
        expect(setTimeout).toBeCalledTimes(2)
        expect(setTimeout).toBeCalledWith(expect.anything(), init.timeout)
        expect(clearTimeout).toBeCalledTimes(1)
    })

    it('defaults to a timeout of 10 seconds', async () => {
        await expect(fetchTimeout(input)).resolves.not.toThrow()

        expect(setTimeout).toBeCalledWith(expect.anything(), 10000)
    })
})
