import fetchMock from 'jest-fetch-mock'

export const DEFAULT_WAIT = 500

export const fetchMockResponseWithDelay = (delay: number = DEFAULT_WAIT) => {
    fetchMock.mockResponse(
        () => new Promise((resolve) => setTimeout(() => resolve(''), delay))
    )
}
