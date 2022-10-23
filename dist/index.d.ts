import { ChaosConfig, HedgeConfig, ReliableRequestInfo, ReliableRequestInit, RetryConfig, TimeoutConfig } from './types';
import { EventName, ListenerFunction } from './types';
export declare class ReliableFetch {
    private input;
    private init;
    constructor(input: ReliableRequestInfo, init?: ReliableRequestInit);
    /**
     * Listen for a specific lifecycle event by event name.
     *
     * @param {EventName} eventName - unique identifier for a lifecycle event
     * @param {ListenerFunction} listener - callback function for when the lifecycle event is emitted
     */
    on(eventName: EventName, listener: ListenerFunction): ReliableFetch;
    /**
     * The request will be aborted with an `AbortError` if it does not resolve
     * or reject within the configured timeout.
     *
     * @param {TimeoutConfig} config
     * @param {number} config.timeout - milliseconds (default: 0)
     */
    timeout(config?: Partial<TimeoutConfig>): Promise<Response>;
    /**
     * The initial request will be aborted if it does not resolve or reject
     * within the configured timeout and hedged with another request (e.g. set
     * `config.timeout` to the P99 response time to hedge 1% of requests).
     *
     * @param {HedgeConfig} config
     * @param {number} config.timeout - milliseconds (default: 0)
     */
    hedge(config?: Partial<HedgeConfig>): Promise<Response>;
    /**
     * The request will randomly fail with a `ReliableFetchChaosError` based on
     * the configured failure rate (e.g. set `config.failureRate` to `0.1` for
     * ~10% of requests to fail).
     *
     * @param {ChaosConfig} config
     * @param {number} config.failureRate - number between 0 and 1 representing the percentage of fetch calls to fail (default: 1)
     */
    chaos(config?: Partial<ChaosConfig>): Promise<Response>;
    /**
     * The request will be retried based on the configuration.
     *
     * @param {RetryConfig} config
     * @param {number} config.retries - number of times to retry (default: 1)
     * @param {number} config.maxRetries - maximum number of times to retry (default: 10)
     * @param {number} config.delay - delay between retries in milliseconds (default: 100)
     * @param {number} config.maxDelay - maximum delay between retries in milliseconds (default: 10000)
     * @param {RetryBackoffStrategy} config.strategy - constant or exponential (default: constant)
     * @param {boolean} jitter - apply jitter to delay between retries (default: true)
     */
    retry(config?: Partial<RetryConfig>): Promise<Response>;
}
declare const reliableFetch: (url: ReliableRequestInfo, init?: ReliableRequestInit) => ReliableFetch;
export default reliableFetch;
export * from './errors';
export * from './fetch';
export * from './types';
