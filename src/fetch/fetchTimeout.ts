import { ReliableFetchFunction, TimeoutConfig } from '../types'

const fetchTimeout: ReliableFetchFunction = async (input, init) => {
    const config: TimeoutConfig = {
        timeout: init?.timeout ?? 10000,
    }
    const controller = new AbortController()
    let timeout: NodeJS.Timeout | undefined

    if (init && config.timeout) {
        timeout = setTimeout(() => {
            controller.abort()
            init?.eventEmitter?.emit('timeout')
        }, config.timeout)

        init.signal = controller.signal
    }

    let response = await fetch(input, init)

    if (timeout) {
        clearTimeout(timeout)
    }

    return response
}

export default fetchTimeout
