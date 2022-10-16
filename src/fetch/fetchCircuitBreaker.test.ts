import { describe, expect, it } from '@jest/globals'
import fetchCircuitBreaker from './fetchCircuitBreaker'
import { fetchMockResponseWithDelay, DEFAULT_DELAY } from '../../jest.helpers'

describe('fetchCircuitBreaker', () => {
    beforeEach(() => fetchMockResponseWithDelay())

    it('calls fetch once if first call resolves within timeout ', async () => {
        await expect(
            fetchCircuitBreaker('', {
                timeout: DEFAULT_DELAY * 2,
            })
        ).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
    })

    it('returns fallback if first call rejects within timeout ', async () => {
        const response = await fetchCircuitBreaker('', {
            timeout: DEFAULT_DELAY / 2,
            fallback: () =>
                new Promise((resolve) => resolve(new Response('fallback'))),
        })

        expect(await response.text()).toBe('fallback')
        expect(fetch).toBeCalledTimes(1)
    })
})
