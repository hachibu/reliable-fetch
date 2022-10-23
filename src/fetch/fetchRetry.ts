import { ReliableFetchFunction, RetryConfig } from '../types'
import { setTimeout } from 'timers/promises'
import { addRandomJitter } from '../utils'

const fetchRetry: ReliableFetchFunction = async (input, init) => {
    const config: RetryConfig = {
        delay: init?.delay ?? 100,
        maxDelay: init?.maxDelay ?? 10000,
        attempts: init?.attempts ?? 1,
        maxAttempts: init?.maxAttempts ?? 10,
        backoff: init?.backoff ?? 'constant',
        jitter: init?.jitter ?? 'none',
    }
    const errors = []
    const retries = Math.min(config.attempts, config.maxAttempts)

    try {
        return await fetch(input, init)
    } catch (error) {
        errors.push(error)
    }

    for (let i = 0; i < retries; i++) {
        const delay = Math.min(config.delay, config.maxDelay)

        try {
            init?.eventEmitter?.emit('retry', i + 1, delay)
            return await fetch(input, init)
        } catch (error) {
            errors.push(error)
        }

        await setTimeout(delay)

        if (config.backoff === 'exponential') {
            config.delay = delay * Math.pow(2, i + 1)
        }

        if (config.jitter === 'naive') {
            config.delay = addRandomJitter(config.delay)
        }
    }

    throw errors.at(-1)
}

export default fetchRetry
