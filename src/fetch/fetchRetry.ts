import { ReliableFetchFunction } from '../types'
import { sleep } from '../utils'

const fetchRetry: ReliableFetchFunction = async (input, init) => {
    let strategy = init?.strategy ?? 'linear'
    let delayBetweenRetries = init?.delayBetweenRetries ?? 100
    let maxRetries = init?.maxRetries ?? 1

    for (let i = 0; i < maxRetries; i++) {
        try {
            let response = await fetch(input, init)
            return response
        } catch {}

        await sleep(delayBetweenRetries)

        if (strategy === 'exponential') {
            delayBetweenRetries **= 2
        }
    }

    return fetch(input, init)
}

export default fetchRetry
