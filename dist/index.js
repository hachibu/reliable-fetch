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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliableFetch = void 0;
const fetch_1 = require("./fetch");
class ReliableFetch {
    constructor(url, init = {}) {
        this.url = url;
        this.init = init;
        this.fetch = fetch;
    }
    /**
     * @param {TimeoutConfig} config
     * @param {number} config.timeout - milliseconds
     */
    timeout(config) {
        this.init.timeout = config.timeout;
        this.fetch = fetch_1.fetchTimeout;
        return this;
    }
    /**
     * @param {HedgeConfig} config
     * @param {number} config.timeout - milliseconds
     */
    hedge(config) {
        this.init.timeout = config.timeout;
        this.fetch = fetch_1.fetchHedge;
        return this;
    }
    /**
     * @param {ChaosConfig} config
     * @param {number} config.failureRate - number between 0 and 1 representing the percentage of fetch calls to fail
     */
    chaos(config) {
        this.init.failureRate = config.failureRate;
        this.fetch = fetch_1.fetchChaos;
        return this;
    }
    /**
     * @param {RetryConfig} config
     * @param {RetryBackoffStrategy} config.backoffStrategy - linear | exponential
     * @param {number} config.delay - delay between retries in milliseconds
     * @param {number} config.retries - number of times to retry
     */
    retry(config) {
        this.init.backoffStrategy = config.backoffStrategy;
        this.init.delay = config.delay;
        this.init.retries = config.retries;
        this.fetch = fetch_1.fetchRetry;
        return this;
    }
    /**
     * @param {CircuitBreakerConfig} config
     */
    circuitBreaker(config) {
        this.init.fetch = this.fetch;
        this.init.fallback = config.fallback;
        this.fetch = fetch_1.fetchCircuitBreaker;
        return this;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch(this.url, this.init);
        });
    }
}
exports.ReliableFetch = ReliableFetch;
const reliableFetch = (url, init) => new ReliableFetch(url, init);
exports.default = reliableFetch;
__exportStar(require("./errors"), exports);
__exportStar(require("./fetch"), exports);
__exportStar(require("./types"), exports);
