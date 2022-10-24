import { ReliableFetchFunction, TimeoutConfig } from '../types'
import { setTimeoutWithCancel } from '../utils'

const fetchTimeout: ReliableFetchFunction = async (input, init) => {
    const config: TimeoutConfig = {
        timeout: init?.timeout ?? 10000,
    }
    const controller = new AbortController()
    const { cancel } = setTimeoutWithCancel(() => {
        controller.abort()
        init?.eventEmitter?.emit('timeout')
    }, config.timeout)

    return fetch(input, { ...init, signal: controller.signal }).finally(cancel)
}

export default fetchTimeout
