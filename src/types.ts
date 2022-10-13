import { Options } from 'opossum'

export type ReliableFetchFunction = (
    input: RequestInfo | URL,
    init?: ReliableRequestInit
) => Promise<Response>

export type ReliableRequestInit = RequestInit &
    Options & {
        backoff?: RetryBackoffStrategy
        fallback?: () => Promise<Response>
        fetch?: ReliableFetchFunction
        retries?: number
        delay?: number
        failureRate?: number
    }

export type RetryBackoffStrategy = 'linear' | 'exponential'
