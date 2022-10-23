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
    const delays: number[] = []
    const retries = Math.min(config.attempts, config.maxAttempts)

    try {
        return await fetch(input, init)
    } catch (error) {
        errors.push(error)
    }

    for (let i = 0; i < retries; i++) {
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
                config.delay = delay * Math.pow(2, i + 1)
                break
            case 'fibonacci':
                if (delays.length > 1) {
                    config.delay =
                        delays[delays.length - 2] + delays[delays.length - 1]
                }
                break
        }

        if (config.jitter === 'naive') {
            config.delay = addRandomJitter(config.delay)
        }
    }

    throw errors.at(-1)
}

export default fetchRetry
