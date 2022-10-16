import { ReliableFetchFunction } from '../types'
import fetchTimeout from './fetchTimeout'

const fetchHedge: ReliableFetchFunction = async (input, init) => {
    let response: Response
    try {
        response = await fetchTimeout(input, { ...init })
    } catch (error) {
        if (error instanceof Error) {
            if (error.name !== 'AbortError') {
                throw error
            }
        }
        response = await fetch(input, init)
    }
    return response
}

export default fetchHedge
