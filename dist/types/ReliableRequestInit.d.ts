import { Options } from 'opossum';
import ReliableFetchFunction from './ReliableFetchFunction';
import RetryBackoffStrategy from './RetryBackoffStrategy';
export interface ChaosConfig {
    failureRate: number;
}
export interface CircuitBreakerConfig {
    fallback: () => Promise<Response>;
    fetch: ReliableFetchFunction;
}
export interface HedgeConfig {
    timeout: number;
}
export interface RetryConfig {
    backoffStrategy: RetryBackoffStrategy;
    delay: number;
    retries: number;
}
export interface TimeoutConfig {
    timeout: number;
}
declare type ReliableRequestInit = RequestInit & Partial<ChaosConfig> & Partial<CircuitBreakerConfig> & Partial<HedgeConfig> & Partial<RetryConfig> & Partial<TimeoutConfig> & Options;
export default ReliableRequestInit;
