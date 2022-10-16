import CircuitBreaker from 'opossum'
import { CircuitBreakerConfig, ReliableFetchFunction } from '../types'

const fetchCircuitBreaker: ReliableFetchFunction = async (input, init) => {
    const config: CircuitBreakerConfig = {
        fallback: init?.fallback ?? undefined,
    }
    const breaker = new CircuitBreaker(fetch, init)

    if (config.fallback) {
        breaker.fallback(config.fallback)
    }

    return breaker.fire(input, init)
}

export default fetchCircuitBreaker
