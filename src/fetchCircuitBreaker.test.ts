import { describe, expect, it } from '@jest/globals'
import fetchCircuitBreaker from './fetchCircuitBreaker'
import { fetchMockResponseWithWait, DEFAULT_WAIT } from '../jest.helpers'

describe('fetchCircuitBreaker', () => {
    beforeEach(() => fetchMockResponseWithWait())

    it('calls fetch once if first call resolves within timeout ', async () => {
        await expect(
            fetchCircuitBreaker('', {
                timeout: DEFAULT_WAIT * 2,
            })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('returns fallback if first call rejects within timeout ', async () => {
        const response = await fetchCircuitBreaker('', {
            timeout: DEFAULT_WAIT / 2,
            fallback: () =>
                new Promise((resolve) => resolve(new Response('fallback'))),
        })

        expect(await response.text()).toBe('fallback')
        expect(fetch).toBeCalledTimes(1)
    })
})
