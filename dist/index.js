"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliableFetch = void 0;
const fetch_1 = require("./fetch");
class ReliableFetch {
    constructor(input, init = {}) {
        this.input = input;
        this.init = init;
    }
    /**
     * The request will be aborted with an `AbortError` if it does not resolve
     * or reject within the configured timeout.
     *
     * ```ts
     * await reliableFetch('https://google.com').timeout({ timeout: 10 })
     * ```
     *
     * @param {TimeoutConfig} config
     * @param {number} config.timeout - milliseconds (default: 0)
     */
    timeout(config) {
        return (0, fetch_1.fetchTimeout)(this.input, Object.assign(Object.assign({}, this.init), config));
    }
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
     * @param {number} config.timeout - milliseconds (default: 0)
     */
    hedge(config) {
        return (0, fetch_1.fetchHedge)(this.input, Object.assign(Object.assign({}, this.init), config));
    }
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
     * @param {number} config.failureRate - number between 0 and 1 representing the percentage of fetch calls to fail (default: 1)
     */
    chaos(config) {
        return (0, fetch_1.fetchChaos)(this.input, Object.assign(Object.assign({}, this.init), config));
    }
    /**
     * The request will be retried based on the configuration.
     *
     * ```ts
     * await reliableFetch('https://google.com').retry()
     * ```
     *
     * @param {RetryConfig} config
     * @param {number} config.retries - number of times to retry (default: 1)
     * @param {number} config.delay - delay between retries in milliseconds (default: 100)
     * @param {RetryStrategy} config.strategy - constant or exponential (default: constant)
     * @param {boolean} jitter - apply jitter to delay between retries (default: true)
     */
    retry(config) {
        return (0, fetch_1.fetchRetry)(this.input, Object.assign(Object.assign({}, this.init), config));
    }
}
exports.ReliableFetch = ReliableFetch;
const reliableFetch = (url, init) => new ReliableFetch(url, init);
exports.default = reliableFetch;
__exportStar(require("./errors"), exports);
__exportStar(require("./fetch"), exports);
__exportStar(require("./types"), exports);
