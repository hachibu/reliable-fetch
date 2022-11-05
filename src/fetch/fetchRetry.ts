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
    let error

    try {
        return await fetch(input, init)
    } catch (e) {
        error = e
    }

    const attempts = Math.min(config.attempts, config.maxAttempts)

    for (let attempt = 1; attempt <= attempts; attempt++) {
        let delay = config.delay

        delay = delayWithBackoff(delay, attempt, config.backoff)
        delay = delayWithJitter(delay, config.jitter)
        delay = Math.min(delay, config.maxDelay)

        config.delay = delay

        await setTimeout(delay)

        init?.eventEmitter?.emit('retry', attempt, delay)
        try {
            return await fetch(input, init)
        } catch (e) {
            error = e
        }
    }

    throw error
}

export default fetchRetry
