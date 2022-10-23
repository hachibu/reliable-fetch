import { ReliableFetchFunction, RetryConfig } from '../types'
import { setTimeout } from 'timers/promises'
import { randomNumberBetween } from '../utils'

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
    const delays: number[] = []
    const retries = Math.min(config.attempts, config.maxAttempts)

    try {
        return await fetch(input, init)
    } catch (error) {
        errors.push(error)
    }

    for (let i = 0; i < retries; i++) {
        const attempt = i + 1
        const delay = Math.min(config.delay, config.maxDelay)

        delays.push(delay)
        init?.eventEmitter?.emit('retry', i + 1, delay)

        try {
            return await fetch(input, init)
        } catch (error) {
            errors.push(error)
        }

        await setTimeout(delay)

        switch (config.backoff) {
            case 'exponential':
                config.delay = Math.pow(2, attempt) * delay
                break
            case 'fibonacci':
                if (delays.length > 1) {
                    config.delay =
                        delays[delays.length - 2] + delays[delays.length - 1]
                }
                break
        }

        switch (config.jitter) {
            case 'naive':
                config.delay += randomNumberBetween(0, delay * 0.2)
                break
            case 'equal':
                config.delay =
                    config.delay / 2 + randomNumberBetween(0, config.delay / 2)
                break
            case 'full':
                config.delay = randomNumberBetween(0, config.delay)
                break
        }
    }

    throw errors.at(-1)
}

export default fetchRetry
