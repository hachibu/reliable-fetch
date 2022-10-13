import ReliableFetch from './ReliableFetch'
import { ReliableRequestInit } from './types'
import fetchTimeout from './fetchTimeout'
import fetchCircuitBreaker from './fetchCircuitBreaker'
import fetchHedge from './fetchHedge'
import fetchRetry from './fetchRetry'
import fetchChaos from './fetchChaos'

const reliableFetch = (
    url: RequestInfo | URL,
    init?: ReliableRequestInit
): ReliableFetch => new ReliableFetch(url, init)

export default reliableFetch
export * from './types'
export * from './errors'
export {
    ReliableFetch,
    fetchTimeout,
    fetchCircuitBreaker,
    fetchHedge,
    fetchRetry,
    fetchChaos,
}
