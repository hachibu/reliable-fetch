import ReliableRequestInit from './ReliableRequestInit';
declare type ReliableFetchFunction = (input: RequestInfo | URL, init?: ReliableRequestInit) => Promise<Response>;
export default ReliableFetchFunction;
