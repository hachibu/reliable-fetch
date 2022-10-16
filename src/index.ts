import {
    ChaosConfig,
    CircuitBreakerConfig,
    HedgeConfig,
    ReliableFetchFunction,
    ReliableRequestInit,
    RetryConfig,
    RetryStrategy,
    TimeoutConfig,
} from './types'
import {
    fetchChaos,
    fetchCircuitBreaker,
    fetchHedge,
    fetchRetry,
    fetchTimeout,
} from './fetch'

export class ReliableFetch {
    private fetch: ReliableFetchFunction = fetch

    constructor(
        private url: RequestInfo | URL,
        private init: ReliableRequestInit = {}
    ) {}

    /**
     * @param {TimeoutConfig} config
     * @param {number} config.timeout - milliseconds
     */
    timeout(config: TimeoutConfig): ReliableFetch {
        this.init.timeout = config.timeout
        this.fetch = fetchTimeout
        return this
    }

    /**
     * @param {HedgeConfig} config
     * @param {number} config.timeout - milliseconds
     */
    hedge(config: HedgeConfig): ReliableFetch {
        this.init.timeout = config.timeout
        this.fetch = fetchHedge
        return this
    }

    /**
     * @param {ChaosConfig} config
     * @param {number} config.failureRate - number between 0 and 1 representing the percentage of fetch calls to fail
     */
    chaos(config: ChaosConfig): ReliableFetch {
        this.init.failureRate = config.failureRate
        this.fetch = fetchChaos
        return this
    }

    /**
     * @param {RetryConfig} config
     * @param {RetryStrategy} config.strategy - linear or exponential
     * @param {number} config.delayBetweenRetries - delay between retries in milliseconds
     * @param {number} config.maxRetries - maximum number of times to retry
     */
    retry(config: RetryConfig): ReliableFetch {
        this.init.strategy = config.strategy
        this.init.delayBetweenRetries = config.delayBetweenRetries
        this.init.maxRetries = config.maxRetries
        this.fetch = fetchRetry
        return this
    }

    /**
     * @param {CircuitBreakerConfig} config
     */
    circuitBreaker(config: CircuitBreakerConfig): ReliableFetch {
        this.init.fetch = this.fetch
        this.init.fallback = config.fallback
        this.fetch = fetchCircuitBreaker
        return this
    }

    async run(): Promise<Response> {
        return this.fetch(this.url, this.init)
    }
}

const reliableFetch = (
    url: RequestInfo | URL,
    init?: ReliableRequestInit
): ReliableFetch => new ReliableFetch(url, init)

export default reliableFetch
export * from './errors'
export * from './fetch'
export * from './types'
