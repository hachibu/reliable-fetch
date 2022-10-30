import EventEmitter from 'events'
import fetchHedge from './fetchHedge'
import fetchMock from 'jest-fetch-mock'
import { ReliableRequestInit } from '../types'
import { describe, expect, it } from '@jest/globals'
import { mockResponse } from '../../jest.helpers'

describe('fetchHedge', () => {
    const input = 'http://localhost'

    beforeEach(() => fetchMock.mockResponse(mockResponse()))

    it('hedges if first request fails', async () => {
        const eventEmitter = new EventEmitter()
        const init: ReliableRequestInit = {
            timeout: 50,
            eventEmitter,
        }
        const emit = jest.spyOn(eventEmitter, 'emit')

        await expect(fetchHedge(input, init)).resolves.not.toThrow()

        expect(fetch).toBeCalledTimes(2)
        expect(fetch).toBeCalledWith(
            input,
            expect.objectContaining({
                timeout: 50,
            })
        )
        expect(emit).toBeCalledTimes(2)
        expect(emit).toBeCalledWith('timeout')
        expect(emit).toBeCalledWith('hedge')
    })

    it('does not hedge if first request succeeds', async () => {
        const eventEmitter = new EventEmitter()
        const init: ReliableRequestInit = {
            timeout: 200,
            eventEmitter,
        }
        const emit = jest.spyOn(eventEmitter, 'emit')

        await expect(fetchHedge(input, init)).resolves.not.toThrow()

        expect(fetch).toBeCalledTimes(1)
        expect(fetch).toBeCalledWith(
            input,
            expect.objectContaining({
                timeout: 200,
            })
        )
        expect(emit).toBeCalledTimes(0)
    })

    it('does not hedge if first request request does not timeout', async () => {
        const eventEmitter = new EventEmitter()
        const init: ReliableRequestInit = {
            timeout: 200,
            eventEmitter,
        }
        const emit = jest.spyOn(eventEmitter, 'emit')

        fetchMock.mockReject(new Error())
        await expect(fetchHedge(input, init)).rejects.toThrow()

        expect(fetch).toBeCalledTimes(1)
        expect(fetch).toBeCalledWith(
            input,
            expect.objectContaining({
                timeout: 200,
            })
        )
        expect(emit).toBeCalledTimes(0)
    })

    it('defaults to a timeout of 10 seconds', async () => {
        const eventEmitter = new EventEmitter()
        const init: ReliableRequestInit = {
            eventEmitter,
        }
        const emit = jest.spyOn(eventEmitter, 'emit')

        await expect(fetchHedge(input, init)).resolves.not.toThrow()

        expect(fetch).toBeCalledTimes(1)
        expect(fetch).toBeCalledWith(
            input,
            expect.objectContaining({
                timeout: 10000,
            })
        )
        expect(emit).toBeCalledTimes(0)
    })
})
