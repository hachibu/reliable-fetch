'use strict'
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value)
                  })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value))
                } catch (e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected)
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            )
        })
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const fetchCircuitBreaker_1 = __importDefault(require('./fetchCircuitBreaker'))
const fetchChaos_1 = __importDefault(require('./fetchChaos'))
const fetchHedge_1 = __importDefault(require('./fetchHedge'))
const fetchRetry_1 = __importDefault(require('./fetchRetry'))
const fetchTimeout_1 = __importDefault(require('./fetchTimeout'))
class ReliableFetch {
    constructor(url, init = {}) {
        this.url = url
        this.init = init
        this.fetch = fetch
    }
    timeout(timeout) {
        this.init.timeout = timeout
        this.fetch = fetchTimeout_1.default
        return this
    }
    hedge(timeout) {
        this.init.timeout = timeout
        this.fetch = fetchHedge_1.default
        return this
    }
    chaos(failureRate) {
        this.init.failureRate = failureRate
        this.fetch = fetchChaos_1.default
        return this
    }
    retryTimes(retries) {
        this.init.retries = retries
        this.fetch = fetchRetry_1.default
        return this
    }
    retry(init) {
        if (init === null || init === void 0 ? void 0 : init.retries) {
            this.init.retries = init.retries
        }
        if (init === null || init === void 0 ? void 0 : init.timeout) {
            this.init.timeout = init.timeout
        }
        if (init === null || init === void 0 ? void 0 : init.backoff) {
            this.init.backoff = init.backoff
        }
        this.fetch = fetchRetry_1.default
        return this
    }
    circuitBreaker(init) {
        this.init.fetch = this.fetch
        if (init === null || init === void 0 ? void 0 : init.fallback) {
            this.init.fallback = init.fallback
        }
        this.fetch = fetchCircuitBreaker_1.default
        return this
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch(this.url, this.init)
        })
    }
}
exports.default = ReliableFetch
