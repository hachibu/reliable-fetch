import { Options } from 'opossum'

export type ReliableFetchFunction = (
    input: ReliableRequestInfo,
    init?: ReliableRequestInit
) => Promise<Response>

export type ReliableFallbackFunction = () => Promise<Response>

export type ReliableRequestInfo = RequestInfo | URL

export type ReliableRequestInit = RequestInit &
    Options & {
        backoff?: RetryBackoffStrategy
        fallback?: ReliableFallbackFunction
        fetch?: ReliableFetchFunction
        retries?: number
        delay?: number
    }

export type RetryBackoffStrategy = 'linear' | 'exponential'
