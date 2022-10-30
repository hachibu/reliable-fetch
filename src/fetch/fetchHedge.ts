import { HedgeConfig, ReliableFetchFunction } from '../types'
import fetchTimeout from './fetchTimeout'

const fetchHedge: ReliableFetchFunction = async (input, init) => {
    const config: HedgeConfig = {
        timeout: init?.timeout ?? 10000,
    }
    let response: Response

    try {
        response = await fetchTimeout(input, { ...init, ...config })
    } catch (error) {
        if (error instanceof Error) {
            if (error.name !== 'AbortError') {
                throw error
            }
        }
        init?.eventEmitter?.emit('hedge')
        response = await fetch(input, init)
    }

    return response
}

export default fetchHedge
