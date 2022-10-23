import { describe, expect, it } from '@jest/globals'
import { addRandomJitter, randomNumberBetween } from './index'

describe('utils', () => {
    describe('addRandomJitter', () => {
        it.concurrent('returns a number with random jitter added', async () => {
            for (let i = 0; i < 100; i++) {
                const v = addRandomJitter(i)
                const maxJitter = i * 0.2

                expect(v).toBeGreaterThanOrEqual(i)
                expect(v).toBeLessThanOrEqual(i + maxJitter)
            }
        })
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
