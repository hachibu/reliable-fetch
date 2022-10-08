import ReliableFetch from "./ReliableFetch";
import { ReliableRequestInfo, ReliableRequestInit } from "./types";

const reliableFetch = (
  url: ReliableRequestInfo,
  init?: ReliableRequestInit
): ReliableFetch => {
  return new ReliableFetch(url, init);
};

export default reliableFetch;
export { ReliableFetch };
