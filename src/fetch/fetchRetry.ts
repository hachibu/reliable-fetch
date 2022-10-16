import { ReliableFetchFunction, RetryConfig } from '../types'
import { sleep } from '../utils'

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
        await sleep(config.delayBetweenRetries)
        if (config.strategy === 'exponential') {
            config.delayBetweenRetries **= 2
        }
    }

    return fetch(input, init)
}

export default fetchRetry
