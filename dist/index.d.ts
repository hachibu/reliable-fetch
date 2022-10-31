import { ChaosConfig, HedgeConfig, ReliableRequestInfo, ReliableRequestInit, RetryConfig, TimeoutConfig } from './types';
import { EventName, EventListenerFunction } from './types';
export declare class ReliableFetch {
    private input;
    private init;
    constructor(input: ReliableRequestInfo, init?: ReliableRequestInit);
    /**
     * Listen for a specific lifecycle event by event name.
     *
     * @param {EventName} eventName - unique identifier for a lifecycle event
     * @param {EventListenerFunction} listener - callback function for when the lifecycle event is emitted
     */
    on(eventName: EventName, listener: EventListenerFunction): ReliableFetch;
    /**
     * The request will be aborted with an `AbortError` if it does not settle
     * within the configured timeout.
     *
     * @param {TimeoutConfig} config - timeout config
     * @param {number} config.timeout - milliseconds (default: 10000)
     */
    timeout(config?: Partial<TimeoutConfig>): Promise<Response>;
    /**
     * The initial request will be aborted if it does not settle within the
     * configured timeout and hedged with another request (e.g. set
     * `config.timeout` to the P95 response time to hedge 5% of requests).
     *
     * @param {HedgeConfig} config - hedge config
     * @param {number} config.timeout - milliseconds (default: 10000)
     *
     * @see https://courses.cs.duke.edu//cps296.4/fall13/838-CloudPapers/dean_longtail.pdf
     */
    hedge(config?: Partial<HedgeConfig>): Promise<Response>;
    /**
     * The request will behave chaotically (e.g. down, slow) at the configured
     * rate (e.g. set `config.rate` to `0.1` to impact ~10% of requests).
     *
     * @param {ChaosConfig} config - chaos config
     * @param {number} config.rate - number between 0 and 1 representing the percentage of fetch calls to fail (default: 1)
     * @param {ChaosDownConfig} config.down - failure config
     * @param {number} config.down.status - status code to fail with (default: 500)
     * @param {ChaosSlowConfig} config.slow - latency config
     * @param {number} config.slow.delay - latency delay in milliseconds (default: 0)
     * @param {Jitter} config.slow.jitter - latency jitter (default: none)
     */
    chaos(config?: Partial<ChaosConfig>): Promise<Response>;
    /**
     * The request will be retried based on the config.
     *
     * @param {RetryConfig} config - retry config
     * @param {number} config.attempts - number of times to attempt (default: 1)
     * @param {number} config.maxAttempts - maximum number of times to attempt (default: 10)
     * @param {number} config.delay - delay between attempts in milliseconds (default: 100)
     * @param {number} config.maxDelay - maximum delay between attempts in milliseconds (default: 10000)
     * @param {Backoff} config.backoff - delay backoff (default: constant)
     * @param {Jitter} config.jitter - delay jitter (default: none)
     *
     * @see https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/
     */
    retry(config?: Partial<RetryConfig>): Promise<Response>;
}
declare const reliableFetch: (url: ReliableRequestInfo, init?: ReliableRequestInit) => ReliableFetch;
export default reliableFetch;
export * from './fetch';
export * from './types';
//# sourceMappingURL=index.d.ts.map