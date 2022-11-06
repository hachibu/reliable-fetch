import EventEmitter from 'events'
import { ReliableRequestInit } from '../types'
import fetchChaos from './fetchChaos'
import { describe, expect, it } from '@jest/globals'
import { mockResponse } from '../../jest.helpers'

describe('fetchChaos', () => {
    const input = 'http://localhost'

    beforeEach(() => fetchMock.mockResponse(mockResponse()))

    const rateTests = [[0.1], [0.5], [0.9]]

    it.concurrent.each(rateTests)(
        'randomly fails requests based on the rate: %s',
        async (rate) => {
            const init: ReliableRequestInit = {
                rate,
                down: {
                    status: 503,
                },
            }
            const requestCount = 100
            let failedRequestCount = 0

            for (let i = 0; i < requestCount; i++) {
                try {
                    await fetchChaos(input, init)
                } catch (error) {
                    if (error instanceof Error) {
                        failedRequestCount++
                    } else {
                        throw error
                    }
                }
            }
            const failedRequestRatio = failedRequestCount / requestCount

            expect(failedRequestRatio).toBeLessThanOrEqual(rate + 0.1)
        }
    )

    it('throws an error when failure rate is invalid', async () => {
        const init: ReliableRequestInit = {
            rate: 10,
        }

        await expect(fetchChaos(input, init)).rejects.toThrowError(RangeError)
    })

    it('fails the request', async () => {
        const eventEmitter = new EventEmitter()
        const init: ReliableRequestInit = {
            rate: 1,
            down: {
                status: 503,
            },
            eventEmitter,
        }
        const emit = jest.spyOn(eventEmitter, 'emit')

        await expect(fetchChaos(input, init)).resolves.not.toThrow()

        expect(emit).toBeCalledTimes(1)
        expect(emit).toBeCalledWith('chaos:down', 503)
    })

    it('slows down the request', async () => {
        const eventEmitter = new EventEmitter()
        const init: ReliableRequestInit = {
            rate: 1,
            slow: {
                delay: 200,
                jitter: 'none',
            },
            eventEmitter,
        }
        const emit = jest.spyOn(eventEmitter, 'emit')

        await expect(fetchChaos(input, init)).resolves.not.toThrow()

        expect(emit).toBeCalledTimes(1)
        expect(emit).toBeCalledWith('chaos:slow', 200)
    })
})
