import { Options } from "opossum";

export type ReliableFetchFunction = (
  input: ReliableRequestInfo,
  init?: ReliableRequestInit
) => Promise<Response>;

export type ReliableFallbackFunction = () => Promise<any>;
export type ReliableRequestInfo = RequestInfo | URL;
export type ReliableRequestInit = RequestInit &
  Options & {
    fallback?: ReliableFallbackFunction;
    fetch?: ReliableFetchFunction;
  };
