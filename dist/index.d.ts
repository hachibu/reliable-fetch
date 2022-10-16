import { ChaosConfig, CircuitBreakerConfig, HedgeConfig, ReliableRequestInit, RetryConfig, TimeoutConfig } from './types';
export declare class ReliableFetch {
    private input;
    private init;
    private fetch;
    constructor(input: RequestInfo | URL, init?: ReliableRequestInit);
    /**
     * The request will be aborted with an `AbortError` if it does not resolve or reject within the configured timeout.
     *
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
     * @param {RetryStrategy} config.strategy - linear or exponential
     * @param {number} config.delayBetweenRetries - delay between retries in milliseconds
     * @param {number} config.maxRetries - maximum number of times to retry
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
