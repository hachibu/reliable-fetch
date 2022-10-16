import fetchMock from 'jest-fetch-mock'

export const DEFAULT_DELAY = 500

export const fetchMockResponseWithDelay = (delay?: number) =>
    fetchMock.mockResponse(() => sleep(delay ?? DEFAULT_DELAY))

export const sleep = <T>(ms: number): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(<T>''), ms))
