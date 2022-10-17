import fetchMock from 'jest-fetch-mock'
import { sleep } from './src/utils'

export const DEFAULT_DELAY = 100

export const fetchMockResponseWithDelay = (delay?: number) =>
    fetchMock.mockResponse(() => sleep(delay ?? DEFAULT_DELAY))
