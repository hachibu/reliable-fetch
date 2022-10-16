import { ReliableFetchFunction } from '../types'
import { ArgumentError, ChaosError } from '../errors'

const fetchChaos: ReliableFetchFunction = async (input, init) => {
    let n = Math.random()
    let failureRate = 1 - (init?.failureRate ?? 0)

    if (failureRate < 0 || failureRate > 1) {
        throw new ArgumentError('failureRate: should be between 0 and 1')
    } else if (n > failureRate) {
        throw new ChaosError(`${n.toFixed(2)} > ${failureRate} `)
    }

    return fetch(input, init)
}

export default fetchChaos
