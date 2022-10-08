import { ReliableFetchFunction } from './types'
import fetchTimeout from './fetchTimeout'

const fetchHedge: ReliableFetchFunction = async (input, init) => {
    let response: Response
    try {
        response = await fetchTimeout(input, { ...init })
    } catch (error: unknown) {
        const e = error as DOMException
        if (e?.name !== 'AbortError') {
            throw error
        }
        response = await fetch(input, init)
    }
    return response
}

export default fetchHedge
