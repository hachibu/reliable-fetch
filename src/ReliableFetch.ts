import { time } from "console";
import fetchCircuitBreaker from "./fetchCircuitBreaker";
import fetchHedged from "./fetchHedged";
import fetchTimeout from "./fetchTimeout";
import {
  ReliableFallbackFunction,
  ReliableFetchFunction,
  ReliableRequestInit,
} from "./types";

export default class ReliableFetch {
  fetch: ReliableFetchFunction = fetch;

  constructor(
    public url: RequestInfo | URL,
    public init: ReliableRequestInit = {}
  ) {}

  timeout(timeout: number): ReliableFetch {
    this.init.timeout = timeout;
    this.fetch = fetchTimeout;
    return this;
  }

  hedge(timeout: number): ReliableFetch {
    this.init.timeout = timeout;
    this.fetch = fetchHedged;
    return this;
  }

  circuitBreaker(init?: ReliableRequestInit): ReliableFetch {
    this.init.fetch = this.fetch;
    if (init?.fallback) {
      this.init.fallback = init.fallback;
    }
    this.fetch = fetchCircuitBreaker;
    return this;
  }

  async run(): Promise<Response> {
    return this.fetch(this.url, this.init);
  }
}
