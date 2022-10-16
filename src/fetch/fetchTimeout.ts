import { ReliableFetchFunction, TimeoutConfig } from '../types'

const fetchTimeout: ReliableFetchFunction = async (input, init) => {
    const config: TimeoutConfig = {
        timeout: init?.timeout ?? 0,
    }

    if (init && config.timeout) {
        init.signal = (<any>AbortSignal).timeout(config.timeout)
    }

    return fetch(input, init)
}

export default fetchTimeout
