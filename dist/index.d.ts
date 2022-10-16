import { ReliableRequestInit } from './types';
import { ChaosConfig, CircuitBreakerConfig, HedgeConfig, RetryConfig, TimeoutConfig } from './types/ReliableRequestInit';
export declare class ReliableFetch {
    private url;
    private init;
    private fetch;
    constructor(url: RequestInfo | URL, init?: ReliableRequestInit);
    /**
     * @param {TimeoutConfig} config
     * @param {number} config.timeout - milliseconds
     */
    timeout(config: TimeoutConfig): ReliableFetch;
    /**
     * @param {HedgeConfig} config
     * @param {number} config.timeout - milliseconds
     */
    hedge(config: HedgeConfig): ReliableFetch;
    /**
     * @param {ChaosConfig} config
     * @param {number} config.failureRate - number between 0 and 1 representing the percentage of fetch calls to fail
     */
    chaos(config: ChaosConfig): ReliableFetch;
    /**
     * @param {RetryConfig} config
     * @param {RetryBackoffStrategy} config.backoffStrategy - linear | exponential
     * @param {number} config.delay - delay between retries in milliseconds
     * @param {number} config.retries - number of times to retry
     */
    retry(config: RetryConfig): ReliableFetch;
    /**
     * @param {CircuitBreakerConfig} config
     */
    circuitBreaker(config: CircuitBreakerConfig): ReliableFetch;
    run(): Promise<Response>;
}
declare const reliableFetch: (url: RequestInfo | URL, init?: ReliableRequestInit) => ReliableFetch;
export default reliableFetch;
export * from './errors';
export * from './fetch';
export * from './types';
