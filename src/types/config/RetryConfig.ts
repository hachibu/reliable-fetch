import Backoff from '../Backoff'

export default interface RetryConfig {
    attempts: number
    maxAttempts: number
    delay: number
    maxDelay: number
    backoff: Backoff
    jitter: boolean
}
