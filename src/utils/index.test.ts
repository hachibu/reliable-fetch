import { describe, expect, it } from '@jest/globals'
import {
    delayWithBackoff,
    delayWithJitter,
    randomNumber,
    randomNumberBetween,
    setTimeoutWithCancel,
} from './index'
import { Backoff, Jitter } from '../types'

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

    describe('setTimeoutWithCancel', () => {
        it.concurrent('calls callback function', async () => {
            const callback = jest.fn()

            jest.useFakeTimers()
            setTimeoutWithCancel(callback, 1000)
            jest.runAllTimers()

            expect(callback).toBeCalled()
        })

        it.concurrent(
            'does not call callback function when cancelled',
            async () => {
                const callback = jest.fn()

                jest.useFakeTimers()
                const { cancel } = setTimeoutWithCancel(callback, 1000)
                cancel()
                jest.runAllTimers()

                expect(callback).not.toBeCalled()
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

    describe('delayWithJitter', () => {
        it.concurrent('does not add jitter', async () => {
            const delay = 1
            const delays: number[] = mockJitter(delay, 'none')

            expect(delays).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        })

        it.concurrent('adds full jitter', async () => {
            const delay = 1
            const delays: number[] = mockJitter(delay, 'full')

            for (const d of delays) {
                expect(d).toBeGreaterThanOrEqual(delay)
                expect(d).toBeLessThanOrEqual(delay * 2)
            }
        })

        it.concurrent('adds equal jitter', async () => {
            const delay = 1
            const delays: number[] = mockJitter(delay, 'equal')

            for (const d of delays) {
                expect(d).toBeGreaterThanOrEqual(delay + delay / 2)
                expect(d).toBeLessThanOrEqual(delay * 2)
            }
        })

        it.concurrent('adds decorrelated jitter', async () => {
            const delay = 1
            const delays: number[] = mockJitter(delay, 'decorrelated')

            for (const d of delays) {
                expect(d).toBeGreaterThanOrEqual(delay)
                expect(d).toBeLessThanOrEqual(delay + delay * 3)
            }
        })

        const mockJitter = (delay: number, jitter: Jitter): number[] => {
            const delays: number[] = []

            for (let attempt = 1; attempt <= 10; attempt++) {
                delays.push(delayWithJitter(delay, jitter))
            }

            return delays
        }
    })
})
