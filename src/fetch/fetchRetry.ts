import { ReliableFetchFunction, RetryConfig } from '../types'
import { setTimeout } from 'timers/promises'
import { randomNumberWithinJitterPeriod } from '../utils'

const fetchRetry: ReliableFetchFunction = async (input, init) => {
    const config: RetryConfig = {
        delay: init?.delay ?? 100,
        maxDelay: init?.maxDelay ?? 10000,
        retries: init?.retries ?? 1,
        maxRetries: init?.maxRetries ?? 10,
        strategy: init?.strategy ?? 'constant',
        jitter: init?.jitter ?? true,
    }
    const retries = Math.min(config.retries, config.maxRetries)

    for (let i = 0; i < retries; i++) {
        try {
            return await fetch(input, init)
        } catch {}

        const delay = Math.min(config.delay, config.maxDelay)

        await setTimeout(delay)

        if (config.strategy === 'exponential') {
            // 100, 200, 400, 800, 1600, ...
            config.delay = delay * Math.pow(2, i)
        }

        if (config.jitter) {
            config.delay = randomNumberWithinJitterPeriod(config.delay)
        }
    }

    return fetch(input, init)
}

export default fetchRetry
