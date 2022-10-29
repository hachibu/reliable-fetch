import { MockResponseInitFunction } from 'jest-fetch-mock'

export const mockResponse = (): MockResponseInitFunction => () =>
    new Promise((resolve) => setTimeout(() => resolve(''), 100))
