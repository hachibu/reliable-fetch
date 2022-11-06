import { MockResponseInit, MockResponseInitFunction } from 'jest-fetch-mock'

export const mockResponse = (): MockResponseInitFunction => () =>
    new Promise<MockResponseInit>((resolve) =>
        setTimeout(() => resolve({}), 100)
    )
