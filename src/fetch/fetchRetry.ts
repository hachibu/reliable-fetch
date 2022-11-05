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
    const attempts = Math.min(config.attempts, config.maxAttempts)
    let error

    try {
        return await fetch(input, init)
    } catch (e) {
        error = e
    }

    for (let attempt = 1; attempt <= attempts; attempt++) {
        let delay = Math.min(config.delay, config.maxDelay)

        try {
            init?.eventEmitter?.emit('retry', attempt, delay)
            return await fetch(input, init)
        } catch (e) {
            error = e
        }

        await setTimeout(delay)

        delay = delayWithBackoff(delay, attempt, config.backoff)
        delay = delayWithJitter(delay, config.jitter)

        config.delay = delay
    }

    throw error
}

export default fetchRetry
