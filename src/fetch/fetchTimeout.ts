import { ReliableFetchFunction, TimeoutConfig } from '../types'

const fetchTimeout: ReliableFetchFunction = async (input, init) => {
    const config: TimeoutConfig = {
        timeout: init?.timeout ?? 0,
    }
    const controller = new AbortController()

    if (init && config.timeout) {
        setTimeout(() => {
            controller.abort()
            init?.eventEmitter?.emit('timeout')
        }, config.timeout)

        init.signal = controller.signal
    }

    return fetch(input, init)
}

export default fetchTimeout
