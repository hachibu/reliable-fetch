import { Options } from 'opossum'
export declare type ReliableFetchFunction = (
    input: RequestInfo | URL,
    init?: ReliableRequestInit
) => Promise<Response>
export declare type ReliableRequestInit = RequestInit &
    Options & {
        backoff?: RetryBackoffStrategy
        fallback?: () => Promise<Response>
        fetch?: ReliableFetchFunction
        retries?: number
        delay?: number
        failureRate?: number
    }
export declare type RetryBackoffStrategy = 'linear' | 'exponential'
