import crypto from 'crypto'
import { Jitter } from '../types'

export const randomNumber = (): number => {
    const max = 100
    return crypto.randomInt(0, max) / max
}

export const randomNumberBetween = (min: number, max: number): number => {
    return randomNumber() * (max - min) + min
}

export const setTimeoutWithCancel = (
    callback: VoidFunction,
    ms?: number
): { id: NodeJS.Timeout; cancel: VoidFunction } => {
    const id = setTimeout(callback, ms)
    const cancel = () => clearTimeout(id)

    return {
        id,
        cancel,
    }
}

export const addJitter = (delay: number, jitter: Jitter): number => {
    switch (jitter) {
        case 'naive':
            delay += randomNumberBetween(0, delay * 0.2)
            break
        case 'equal':
            delay = delay / 2 + randomNumberBetween(0, delay / 2)
            break
        case 'full':
            delay = randomNumberBetween(0, delay)
            break
    }
    return delay
}
