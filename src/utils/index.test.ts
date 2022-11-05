import { describe, expect, it } from '@jest/globals'
import { delayWithBackoff, randomNumber, randomNumberBetween } from './index'
import { Backoff } from '../types'

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

    describe('delayWithBackoff', () => {
        it.concurrent('grows at a constant rate', async () => {
            const delays: number[] = mockBackoff('constant')

            expect(delays).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        })

        it.concurrent('grows at an exponential rate', async () => {
            const delays: number[] = mockBackoff('exponential')

            expect(delays).toEqual([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024])
        })

        const mockBackoff = (backoff: Backoff): number[] => {
            const delays: number[] = []
            let delay = 1

            for (let attempt = 1; attempt <= 10; attempt++) {
                delay = delayWithBackoff(delay, 1, backoff)
                delays.push(delay)
            }

            return delays
        }
    })

    describe('delayWithJitter', () => {})
})
