import { ChaosConfig, HedgeConfig, ReliableRequestInfo, ReliableRequestInit, RetryConfig, TimeoutConfig } from './types';
export declare class ReliableFetch {
    private input;
    private init;
    constructor(input: ReliableRequestInfo, init?: ReliableRequestInit);
    /**
     * The request will be aborted with an `AbortError` if it does not resolve
     * or reject within the configured timeout.
     *
     * ```ts
     * await reliableFetch('https://google.com').timeout({ timeout: 10 })
     * ```
     *
     * @param {TimeoutConfig} config
     * @param {number} config.timeout - milliseconds
     */
    timeout(config: TimeoutConfig): Promise<Response>;
    /**
     * The initial request will be aborted if it does not resolve or reject
     * within the configured timeout and hedged with another request (e.g. set
     * `config.timeout` to the P99 response time to hedge 1% of requests).
     *
     * ```ts
     * await reliableFetch('https://google.com').hedge({ timeout: 10 })
     * ```
     *
     * @param {HedgeConfig} config
     * @param {number} config.timeout - milliseconds
     */
    hedge(config: HedgeConfig): Promise<Response>;
    /**
     * The request will randomly fail with a `ReliableFetchChaosError` based on
     * the configured failure rate (e.g. set `config.failureRate` to `0.1` for
     * ~10% of requests to fail).
     *
     * ```ts
     * await reliableFetch('https://google.com').chaos({ failureRate: 0.1 })
     * ```
     *
     * @param {ChaosConfig} config
     * @param {number} config.failureRate - number between 0 and 1 representing the percentage of fetch calls to fail
     */
    chaos(config: ChaosConfig): Promise<Response>;
    /**
     * The request will be retried based on the configuration.
     *
     * ```ts
     * await reliableFetch('https://google.com').retry({
     *     strategy: 'linear',
     *     delayBetweenRetries: 100,
     *     maxRetries: 1,
     * })
     * ```
     *
     * @param {RetryConfig} config
     * @param {RetryStrategy} config.strategy - linear or exponential
     * @param {number} config.delayBetweenRetries - delay between retries in milliseconds
     * @param {number} config.maxRetries - maximum number of times to retry
     */
    retry(config: RetryConfig): Promise<Response>;
}
declare const reliableFetch: (url: ReliableRequestInfo, init?: ReliableRequestInit) => ReliableFetch;
export default reliableFetch;
export * from './errors';
export * from './fetch';
export * from './types';
