import RetryStrategy from './RetryStrategy'

export interface ChaosConfig {
    failureRate: number
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
    Partial<HedgeConfig> &
    Partial<RetryConfig> &
    Partial<TimeoutConfig>

export default ReliableRequestInit
