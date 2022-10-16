import { Options } from 'opossum';
import ReliableFetchFunction from './ReliableFetchFunction';
import RetryBackoffStrategy from './RetryBackoffStrategy';
declare type ReliableRequestInit = RequestInit & Options & {
    backoff?: RetryBackoffStrategy;
    fallback?: () => Promise<Response>;
    fetch?: ReliableFetchFunction;
    retries?: number;
    delay?: number;
    failureRate?: number;
};
export default ReliableRequestInit;
