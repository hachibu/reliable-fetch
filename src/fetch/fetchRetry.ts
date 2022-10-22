import { ReliableFetchFunction, RetryConfig } from '../types'
import { setTimeout } from 'timers/promises'

const fetchRetry: ReliableFetchFunction = async (input, init) => {
    const config: RetryConfig = {
        strategy: init?.strategy ?? 'linear',
        delayBetweenRetries: init?.delayBetweenRetries ?? 100,
        maxRetries: init?.maxRetries ?? 1,
    }

    for (let i = 0; i < config.maxRetries; i++) {
        try {
            return await fetch(input, init)
        } catch {}
        await setTimeout(config.delayBetweenRetries)
        if (config.strategy === 'exponential') {
            config.delayBetweenRetries **= 2
        }
    }

    return fetch(input, init)
}

export default fetchRetry
