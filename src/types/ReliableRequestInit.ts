import { Options } from 'opossum'
import ReliableFetchFunction from './ReliableFetchFunction'
import RetryStrategy from './RetryStrategy'

export interface ChaosConfig {
    failureRate: number
}

export interface CircuitBreakerConfig {
    fallback: () => Promise<Response>
    fetch: ReliableFetchFunction
}

export interface HedgeConfig {
    timeout: number
}

export interface RetryConfig {
    strategy: RetryStrategy
    delayBetweenRetries: number
    maxRetries: number
}

export interface TimeoutConfig {
    timeout: number
}

type ReliableRequestInit = RequestInit &
    Partial<ChaosConfig> &
    Partial<CircuitBreakerConfig> &
    Partial<HedgeConfig> &
    Partial<RetryConfig> &
    Partial<TimeoutConfig> &
    Options

export default ReliableRequestInit
