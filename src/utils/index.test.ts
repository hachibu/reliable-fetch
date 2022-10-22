import { describe, expect, it } from '@jest/globals'
import { randomJitter } from './index'

describe('randomJitter', () => {
    it('returns a random number that is close to the input number', () => {
        for (let i = 0; i < 100; i++) {
            const n = Math.random() * 1000
            const v = randomJitter(n)
            const maxJitter = n * 0.2
            const min = n - maxJitter
            const max = n + maxJitter

            expect(v).toBeGreaterThanOrEqual(min)
            expect(v).toBeLessThanOrEqual(max)
        }
    })
})
