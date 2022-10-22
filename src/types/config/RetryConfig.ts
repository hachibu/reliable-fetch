import RetryStrategy from '../RetryStrategy'

export default interface RetryConfig {
    strategy: RetryStrategy
    delayBetweenRetries: number
    maxRetries: number
}
