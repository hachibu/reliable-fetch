import { ReliableFetchFunction, TimeoutConfig } from '../types'

const createAbortSignalWithTimeout = (timeout: number): AbortSignal => {
    const controller = new AbortController()
    setTimeout(() => controller.abort(), timeout)
    return controller.signal
}

const fetchTimeout: ReliableFetchFunction = async (input, init) => {
    const config: TimeoutConfig = {
        timeout: init?.timeout ?? 0,
    }

    if (init && config.timeout) {
        init.signal = createAbortSignalWithTimeout(config.timeout)
    }

    return fetch(input, init)
}

export default fetchTimeout
