import fetchCircuitBreaker from './fetchCircuitBreaker'
import fetchHedge from './fetchHedge'
import fetchRetry from './fetchRetry'
import fetchTimeout from './fetchTimeout'
import { Backoff, ReliableFetchFunction, ReliableRequestInit } from './types'

export default class ReliableFetch {
    fetch: ReliableFetchFunction = fetch

    constructor(
        public url: RequestInfo | URL,
        public init: ReliableRequestInit = {}
    ) {}

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

    retry(
        retries?: number,
        timeout?: number,
        backoff?: Backoff
    ): ReliableFetch {
        this.init.retries = retries
        this.init.timeout = timeout
        this.init.backoff = backoff
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
