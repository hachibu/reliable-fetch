import { ReliableFetchFunction, RetryConfig } from '../types'
import { setTimeout } from 'timers/promises'
import { delayWithBackoff, delayWithJitter } from '../utils'

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
        const attempt = i + 1
        let delay = Math.min(config.delay, config.maxDelay)

        init?.eventEmitter?.emit('retry', i + 1, delay)

        try {
            return await fetch(input, init)
        } catch (error) {
            errors.push(error)
        }

        await setTimeout(delay)

        delay = delayWithBackoff(delay, attempt, config.backoff)
        delay = delayWithJitter(delay, config.jitter)

        config.delay = delay
    }

    throw errors.at(-1)
}

export default fetchRetry
