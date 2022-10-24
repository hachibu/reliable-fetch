import fetchMock from 'jest-fetch-mock'
import fetchTimeout from './fetchTimeout'
import { describe, expect, it } from '@jest/globals'
import { fetchMockResponseWithDelay, DEFAULT_DELAY } from '../../jest.helpers'

jest.spyOn(global, 'clearTimeout')

describe('fetchTimeout', () => {
    const input = 'https://localhost'

    beforeEach(() => fetchMockResponseWithDelay())

    describe('aborts', () => {
        it('if request does not complete within timeout', async () => {
            const timeout = DEFAULT_DELAY / 2

            fetchMock.mockAbort()
            await expect(fetchTimeout(input, { timeout })).rejects.toThrow()

            expect(fetch).toBeCalledTimes(1)
        })
    })

    describe('does not abort', () => {
        it('if request resolves within timeout', async () => {
            const timeout = DEFAULT_DELAY * 2

            await expect(
                fetchTimeout(input, { timeout })
            ).resolves.not.toThrow()

            expect(fetch).toBeCalledTimes(1)
            expect(clearTimeout).toHaveBeenCalledTimes(1)
        })
    })
})
