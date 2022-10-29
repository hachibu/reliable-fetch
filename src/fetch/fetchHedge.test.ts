import { describe, expect, it } from '@jest/globals'
import fetchHedge from './fetchHedge'
import { mockResponse } from '../../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchHedge', () => {
    const input = 'http://localhost'

    beforeEach(() => fetchMock.mockResponse(mockResponse()))

    it('calls fetch once if first call resolves within timeout ', async () => {
        await expect(fetchHedge(input, { timeout: 200 })).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('calls fetch twice if first call aborts', async () => {
        await expect(fetchHedge(input, { timeout: 50 })).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(2)
    })

    it('throws on first call if error is not AbortError', async () => {
        fetchMock.mockReject(new Error())
        await expect(fetchHedge(input, { timeout: 200 })).rejects.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })
})
