import EventEmitter from 'events'
import { Jitter, Backoff, ReliableRequestInit } from '../types'
import { describe, expect, it } from '@jest/globals'
import fetchRetry from './fetchRetry'
import { mockResponse } from '../../jest.helpers'
import fetchMock from 'jest-fetch-mock'

describe('fetchRetry', () => {
    const input = 'http://localhost'
    const attempts = 3

    beforeEach(() => fetchMock.mockResponse(mockResponse()))

    it('resolves without retry', async () => {
        const eventEmitter = new EventEmitter()
        const init: ReliableRequestInit = {
            attempts,
            delay: 50,
            eventEmitter,
        }
        const emit = jest.spyOn(eventEmitter, 'emit')

        await expect(fetchRetry(input, init)).resolves.not.toThrow()
        expect(fetch).toBeCalledTimes(1)
        expect(emit).toBeCalledTimes(0)
    })

    const backoffTests: Backoff[][] = [['constant'], ['exponential']]

    it.each(backoffTests)('retries with %s backoff', async (backoff) => {
        const eventEmitter = new EventEmitter()
        const init: ReliableRequestInit = {
            attempts,
            delay: 1,
            backoff,
            eventEmitter,
        }
        const emit = jest.spyOn(eventEmitter, 'emit')

        fetchMock.mockAbort()

        await expect(fetchRetry(input, init)).rejects.toThrow()
        expect(fetch).toBeCalledTimes(attempts + 1)
        expect(emit).toBeCalledTimes(attempts)
    })

    const jitterTests: Jitter[][] = [['naive'], ['equal'], ['full']]

    it.each(jitterTests)('retries with %s jitter', async (jitter) => {
        const eventEmitter = new EventEmitter()
        const init: ReliableRequestInit = {
            attempts,
            delay: 1,
            jitter,
            eventEmitter,
        }
        const emit = jest.spyOn(eventEmitter, 'emit')

        fetchMock.mockAbort()

        await expect(fetchRetry(input, init)).rejects.toThrow()
        expect(fetch).toBeCalledTimes(attempts + 1)
        expect(emit).toBeCalledTimes(attempts)
    })

    it('defaults to 1 retry', async () => {
        fetchMock.mockAbort()

        await expect(fetchRetry(input)).rejects.toThrow()
        expect(fetch).toBeCalledTimes(2)
    })
})
