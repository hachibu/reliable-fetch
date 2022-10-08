export const DEFAULT_WAIT = 500

export const fetchMockResponseWithWait = (wait?: number) => {
    fetchMock.mockResponse(
        () =>
            new Promise((resolve) =>
                setTimeout(() => resolve(''), wait ?? DEFAULT_WAIT)
            )
    )
}
