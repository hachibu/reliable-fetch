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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliableFetch = void 0;
const fetch_1 = require("./fetch");
const events_1 = __importDefault(require("events"));
class ReliableFetch {
    constructor(input, init = {}) {
        this.input = input;
        this.init = init;
        this.init.eventEmitter = new events_1.default();
    }
    /**
     * Listen for a specific lifecycle event by event name.
     *
     * @param {EventName} eventName - unique identifier for a lifecycle event
     * @param {ListenerFunction} listener - callback function for when the lifecycle event is emitted
     */
    on(eventName, listener) {
        const { eventEmitter } = this.init;
        if (!eventEmitter) {
            return this;
        }
        else if (eventEmitter.listenerCount(eventName) > 0) {
            return this;
        }
        else {
            eventEmitter.on(eventName, listener);
        }
        return this;
    }
    /**
     * The request will be aborted with an `AbortError` if it does not resolve
     * or reject within the configured timeout.
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
     * @param {ChaosConfig} config
     * @param {number} config.failureRate - number between 0 and 1 representing the percentage of fetch calls to fail (default: 1)
     */
    chaos(config) {
        return (0, fetch_1.fetchChaos)(this.input, Object.assign(Object.assign({}, this.init), config));
    }
    /**
     * The request will be retried based on the configuration.
     *
     * @param {RetryConfig} config
     * @param {number} config.attempts - number of times to attempt (default: 1)
     * @param {number} config.maxAttempts - maximum number of times to attempt (default: 10)
     * @param {number} config.delay - delay between attempts in milliseconds (default: 100)
     * @param {number} config.maxDelay - maximum delay between attempts in milliseconds (default: 10000)
     * @param {Backoff} config.backoff - constant, exponential or fibonacci (default: constant)
     * @param {Jitter} jitter - none or naive (default: none)
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
