import { ReliableFetchFunction, ReliableRequestInit } from './types';
export default class ReliableFetch {
    url: RequestInfo | URL;
    init: ReliableRequestInit;
    fetch: ReliableFetchFunction;
    constructor(url: RequestInfo | URL, init?: ReliableRequestInit);
    /**
     * Abort the request if it exceeds the timeout.
     * @param {number} timeout milliseconds
     */
    timeout(timeout: number): ReliableFetch;
    hedge(timeout: number): ReliableFetch;
    chaos(failureRate: number): ReliableFetch;
    retryTimes(retries: number): ReliableFetch;
    retry(init?: ReliableRequestInit): ReliableFetch;
    circuitBreaker(init?: ReliableRequestInit): ReliableFetch;
    run(): Promise<Response>;
}
