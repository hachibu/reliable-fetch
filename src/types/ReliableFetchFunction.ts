import ReliableRequestInfo from './ReliableRequestInfo'
import ReliableRequestInit from './ReliableRequestInit'

type ReliableFetchFunction = (
    input: ReliableRequestInfo,
    init?: ReliableRequestInit
) => Promise<Response>

export default ReliableFetchFunction
