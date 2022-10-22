import fetchMock from 'jest-fetch-mock'

export const DEFAULT_DELAY = 100

export const fetchMockResponseWithDelay = (ms?: number) =>
    fetchMock.mockResponse(() => {
        return new Promise((resolve) =>
            setTimeout(() => resolve(''), ms ?? DEFAULT_DELAY)
        )
    })
