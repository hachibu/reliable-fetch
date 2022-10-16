import ReliableRequestInit from './ReliableRequestInit'

type ReliableFetchFunction = (
    input: RequestInfo | URL,
    init?: ReliableRequestInit
) => Promise<Response>

export default ReliableFetchFunction
