import { ReliableFetchFunction, RetryConfig } from '../types'
import { setTimeout } from 'timers/promises'
import { randomJitter } from '../utils'

const fetchRetry: ReliableFetchFunction = async (input, init) => {
    const config: RetryConfig = {
        delay: init?.delay ?? 100,
        jitter: init?.jitter ?? true,
        retries: init?.retries ?? 1,
        strategy: init?.strategy ?? 'constant',
    }
    const maxDelay = 10000
    const maxRetries = 10
    const retries = Math.min(config.retries, maxRetries)

    for (let i = 0; i < retries; i++) {
        try {
            return await fetch(input, init)
        } catch {}

        const delay = Math.min(config.delay, maxDelay)

        await setTimeout(delay)

        if (config.strategy === 'exponential') {
            // 100, 200, 400, 800, 1600, ...
            config.delay = delay * Math.pow(2, i)
        }

        if (config.jitter) {
            config.delay = randomJitter(config.delay)
        }
    }

    return fetch(input, init)
}

export default fetchRetry
