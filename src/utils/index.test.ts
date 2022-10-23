import { describe, expect, it } from '@jest/globals'
import { randomNumberWithinJitterPeriod, randomNumberBetween } from './index'

describe('utils', () => {
    describe('randomNumberWithinJitterPeriod', () => {
        it.concurrent(
            'returns a random number within jitter period',
            async () => {
                for (let i = 0; i < 100; i++) {
                    const n = Math.random() * 1000
                    const v = randomNumberWithinJitterPeriod(n)
                    const maxJitter = n * 0.2
                    const min = n - maxJitter
                    const max = n + maxJitter

                    expect(v).toBeGreaterThanOrEqual(min)
                    expect(v).toBeLessThanOrEqual(max)
                }
            }
        )
    })

    describe('randomNumberBetween', () => {
        it.concurrent(
            'returns a random number between min and max',
            async () => {
                for (let min = 0; min < 100; min++) {
                    const max = min + Math.random() * 1000
                    const v = randomNumberBetween(min, max)

                    expect(v).toBeGreaterThanOrEqual(min)
                    expect(v).toBeLessThanOrEqual(max)
                }
            }
        )
    })
})
