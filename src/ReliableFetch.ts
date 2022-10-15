import fetchCircuitBreaker from './fetchCircuitBreaker'
import fetchChaos from './fetchChaos'
import fetchHedge from './fetchHedge'
import fetchRetry from './fetchRetry'
import fetchTimeout from './fetchTimeout'
import { ReliableFetchFunction, ReliableRequestInit } from './types'

export default class ReliableFetch {
    fetch: ReliableFetchFunction = fetch

    constructor(
        public url: RequestInfo | URL,
        public init: ReliableRequestInit = {}
    ) {}

    /**
     * Abort the request if it exceeds the timeout.
     * @param {number} timeout milliseconds
     */
    timeout(timeout: number): ReliableFetch {
        this.init.timeout = timeout
        this.fetch = fetchTimeout
        return this
    }

    hedge(timeout: number): ReliableFetch {
        this.init.timeout = timeout
        this.fetch = fetchHedge
        return this
    }

    chaos(failureRate: number): ReliableFetch {
        this.init.failureRate = failureRate
        this.fetch = fetchChaos
        return this
    }

    retryTimes(retries: number): ReliableFetch {
        this.init.retries = retries
        this.fetch = fetchRetry
        return this
    }

    retry(init?: ReliableRequestInit): ReliableFetch {
        if (init?.retries) {
            this.init.retries = init.retries
        }
        if (init?.timeout) {
            this.init.timeout = init.timeout
        }
        if (init?.backoff) {
            this.init.backoff = init.backoff
        }
        this.fetch = fetchRetry
        return this
    }

    circuitBreaker(init?: ReliableRequestInit): ReliableFetch {
        this.init.fetch = this.fetch
        if (init?.fallback) {
            this.init.fallback = init.fallback
        }
        this.fetch = fetchCircuitBreaker
        return this
    }

    async run(): Promise<Response> {
        return this.fetch(this.url, this.init)
    }
}
