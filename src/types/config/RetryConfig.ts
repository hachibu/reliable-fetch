import RetryBackoffStrategy from '../RetryBackoffStrategy'

export default interface RetryConfig {
    retries: number
    maxRetries: number
    delay: number
    maxDelay: number
    backoffStrategy: RetryBackoffStrategy
    jitter: boolean
}
