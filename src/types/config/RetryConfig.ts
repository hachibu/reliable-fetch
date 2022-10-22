import RetryStrategy from '../RetryStrategy'

export default interface RetryConfig {
    retries: number
    delay: number
    strategy: RetryStrategy
    jitter: boolean
}
