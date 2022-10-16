import { ReliableFetchFunction } from '../types'

const fetchTimeout: ReliableFetchFunction = async (input, init) => {
    if (init?.timeout) {
        init.signal = (<any>AbortSignal).timeout(init?.timeout)
    }
    return fetch(input, init)
}

export default fetchTimeout
