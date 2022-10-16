import { ReliableFetchFunction } from '../types'
import { sleep } from '../utils'

const fetchRetry: ReliableFetchFunction = async (input, init) => {
    let backoff = init?.backoffStrategy ?? 'linear'
    let delay = init?.delay ?? 100
    let retries = init?.retries ?? 1

    for (let i = 0; i < retries; i++) {
        try {
            let response = await fetch(input, init)
            return response
        } catch {}

        await sleep(delay)

        if (backoff === 'exponential') {
            delay **= 2
        }
    }

    return fetch(input, init)
}

export default fetchRetry
