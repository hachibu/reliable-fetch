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
     * Abort the request if it exceeds the timeout.
     * @param {number} timeout milliseconds
     */
    timeout(timeout) {
        this.init.timeout = timeout;
        this.fetch = fetch_1.fetchTimeout;
        return this;
    }
    hedge(timeout) {
        this.init.timeout = timeout;
        this.fetch = fetch_1.fetchHedge;
        return this;
    }
    chaos(failureRate) {
        this.init.failureRate = failureRate;
        this.fetch = fetch_1.fetchChaos;
        return this;
    }
    retryTimes(retries) {
        this.init.retries = retries;
        this.fetch = fetch_1.fetchRetry;
        return this;
    }
    retry(init) {
        if (init === null || init === void 0 ? void 0 : init.retries) {
            this.init.retries = init.retries;
        }
        if (init === null || init === void 0 ? void 0 : init.timeout) {
            this.init.timeout = init.timeout;
        }
        if (init === null || init === void 0 ? void 0 : init.backoff) {
            this.init.backoff = init.backoff;
        }
        this.fetch = fetch_1.fetchRetry;
        return this;
    }
    circuitBreaker(init) {
        this.init.fetch = this.fetch;
        if (init === null || init === void 0 ? void 0 : init.fallback) {
            this.init.fallback = init.fallback;
        }
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
