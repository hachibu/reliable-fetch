import ReliableFetch from './ReliableFetch'
import { ReliableRequestInit } from './types'
import fetchTimeout from './fetchTimeout'
import fetchCircuitBreaker from './fetchCircuitBreaker'
import fetchHedge from './fetchHedge'
import fetchRetry from './fetchRetry'

const reliableFetch = (
    url: RequestInfo | URL,
    init?: ReliableRequestInit
): ReliableFetch => new ReliableFetch(url, init)

export default reliableFetch
export * from './types'
export {
    ReliableFetch,
    fetchTimeout,
    fetchCircuitBreaker,
    fetchHedge,
    fetchRetry,
}
