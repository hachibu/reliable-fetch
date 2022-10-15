import fetchMock from 'jest-fetch-mock'
import { sleep } from './src/utils'

export const DEFAULT_WAIT = 500

export const fetchMockResponseWithDelay = (delay: number = DEFAULT_WAIT) =>
    fetchMock.mockResponse(() => sleep(delay))
