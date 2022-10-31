import { describe, expect, it } from '@jest/globals'
import { randomNumber, randomNumberBetween } from './index'

describe('utils', () => {
    describe('randomNumber', () => {
        it.concurrent('creates random numbers', async () => {
            const nums: number[] = []
            const set = new Set()

            for (let i = 0; i < 10000; i++) {
                const n = randomNumber()
                nums.push(n)
                set.add(n)
            }

            expect(nums.length).toEqual(set.size)
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
