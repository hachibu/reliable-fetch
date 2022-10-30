import { ChaosConfig, ReliableFetchFunction } from '../types'
import { ReliableFetchChaosError } from '../errors'
import { randomNumber } from '../utils'

const fetchChaos: ReliableFetchFunction = async (input, init) => {
    const config: ChaosConfig = {
        rate: 1 - (init?.rate ?? 0),
    }
    const randomNum = randomNumber()

    if (config.rate < 0 || config.rate > 1) {
        throw new RangeError('rate: should be between 0 and 1')
    } else if (randomNum > config.rate) {
        init?.eventEmitter?.emit('chaos')
        throw new ReliableFetchChaosError(
            `${randomNum.toFixed(2)} > ${config.rate} `
        )
    }

    return fetch(input, init)
}

export default fetchChaos
