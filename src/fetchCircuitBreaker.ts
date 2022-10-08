import { ReliableFetchFunction } from "./types";
import CircuitBreaker from "opossum";

const fetchCircuitBreaker: ReliableFetchFunction = async (input, init) => {
  const breaker = new CircuitBreaker(init?.fetch ?? fetch, init);

  if (init?.fallback) {
    breaker.fallback(init.fallback);
  }

  return breaker.fire(input, init);
};

export default fetchCircuitBreaker;
