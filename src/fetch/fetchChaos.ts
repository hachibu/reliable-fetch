import { ChaosConfig, ReliableFetchFunction } from '../types'
import { ReliableFetchChaosError } from '../errors'

const fetchChaos: ReliableFetchFunction = async (input, init) => {
    const config: ChaosConfig = {
        failureRate: 1 - (init?.failureRate ?? 0),
    }
    const randomNum = Math.random()

    if (config.failureRate < 0 || config.failureRate > 1) {
        throw new RangeError('failureRate: should be between 0 and 1')
    } else if (randomNum > config.failureRate) {
        init?.eventEmitter?.emit('chaos')
        throw new ReliableFetchChaosError(
            `${randomNum.toFixed(2)} > ${config.failureRate} `
        )
    }

    return fetch(input, init)
}

export default fetchChaos
