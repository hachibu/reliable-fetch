import ReliableFetch from './ReliableFetch'
import { ReliableRequestInfo, ReliableRequestInit } from './types'
import fetchTimeout from './fetchTimeout'
import fetchCircuitBreaker from './fetchCircuitBreaker'
import fetchHedge from './fetchHedge'
import fetchRetry from './fetchRetry'

const reliableFetch = (
    url: ReliableRequestInfo,
    init?: ReliableRequestInit
): ReliableFetch => {
    return new ReliableFetch(url, init)
}

export default reliableFetch
export * from './types'
export {
    ReliableFetch,
    fetchTimeout,
    fetchCircuitBreaker,
    fetchHedge,
    fetchRetry,
}
