import { describe, expect, it } from '@jest/globals'
import { randomNumberBetween } from './index'

describe('utils', () => {
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
