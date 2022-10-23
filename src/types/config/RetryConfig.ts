import RetryStrategy from '../RetryStrategy'

export default interface RetryConfig {
    retries: number
    maxRetries: number
    delay: number
    maxDelay: number
    strategy: RetryStrategy
    jitter: boolean
}
