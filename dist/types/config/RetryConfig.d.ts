import Backoff from '../Backoff';
import Jitter from '../Jitter';
export default interface RetryConfig {
    attempts: number;
    maxAttempts: number;
    delay: number;
    maxDelay: number;
    backoff: Backoff;
    jitter: Jitter;
}
