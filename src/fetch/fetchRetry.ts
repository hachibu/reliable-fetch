import { ReliableFetchFunction, RetryConfig } from '../types'
import { setTimeout } from 'timers/promises'
import { randomNumberWithinJitterPeriod } from '../utils'

const fetchRetry: ReliableFetchFunction = async (input, init) => {
    const config: RetryConfig = {
        delay: init?.delay ?? 100,
        maxDelay: init?.maxDelay ?? 10000,
        attempts: init?.attempts ?? 1,
        maxAttempts: init?.maxAttempts ?? 10,
        backoff: init?.backoff ?? 'constant',
        jitter: init?.jitter ?? false,
    }
    const errors = []
    const retries = Math.min(config.attempts, config.maxAttempts)

    try {
        return await fetch(input, init)
    } catch (error) {
        errors.push(error)
    }

    for (let i = 0; i < retries; i++) {
        try {
            init?.eventEmitter?.emit('retry', i + 1)
            return await fetch(input, init)
        } catch (error) {
            errors.push(error)
        }

        const delay = Math.min(config.delay, config.maxDelay)

        await setTimeout(delay)

        if (config.backoff === 'exponential') {
            config.delay = delay * Math.pow(2, i + 1)
        }

        if (config.jitter) {
            config.delay = randomNumberWithinJitterPeriod(config.delay)
        }
    }

    throw errors.at(-1)
}

export default fetchRetry
