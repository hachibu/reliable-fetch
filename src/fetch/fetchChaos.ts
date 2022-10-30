import { ChaosConfig, ReliableFetchFunction } from '../types'
import { addJitter, randomNumber } from '../utils'
import { setTimeout } from 'timers/promises'

const fetchChaos: ReliableFetchFunction = async (input, init) => {
    const config: ChaosConfig = {
        rate: 1 - (init?.rate ?? 0),
        down: {
            status: init?.down?.status ?? 500,
        },
        slow: {
            delay: init?.slow?.delay ?? 0,
            jitter: init?.slow?.jitter ?? 'none',
        },
    }
    const downEnabled = !!init?.down
    const slowEnabled = !!init?.slow

    if (config.rate < 0 || config.rate > 1) {
        throw new RangeError('rate: should be between 0 and 1')
    }

    if (downEnabled && randomNumber() > config.rate) {
        const status = config.down.status
        init?.eventEmitter?.emit('chaos:down', status)
        return new Response(null, { status })
    }

    if (slowEnabled && randomNumber() > config.rate) {
        const delay = addJitter(config.slow.delay, config.slow.jitter)
        await setTimeout(delay)
        init?.eventEmitter?.emit('chaos:slow', delay)
    }

    return fetch(input, init)
}

export default fetchChaos
