import { ReliableFetchFunction } from './types'
import { sleep } from './utils'

const fetchRetry: ReliableFetchFunction = async (input, init) => {
    let backoff = init?.backoff ?? 'linear'
    let retries = init?.retries ?? 1
    let timeout = (init?.timeout as number) ?? 500

    for (let i = 0; i < retries; i++) {
        try {
            let response = await fetch(input, init)
            return response
        } catch {}

        await sleep(timeout)

        if (backoff === 'exponential') {
            timeout **= 2
        }
    }

    return fetch(input, init)
}

export default fetchRetry
