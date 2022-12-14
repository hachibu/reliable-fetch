import crypto from 'crypto'
import { Backoff, Jitter } from '../types'

export const randomNumber = (): number => {
    const max = 10 ** 10
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

export const delayWithBackoff = (
    delay: number,
    attempt: number,
    backoff: Backoff
): number => {
    switch (backoff) {
        case 'exponential':
            delay *= Math.pow(2, attempt)
            break
    }
    return delay
}

export const delayWithJitter = (delay: number, jitter: Jitter): number => {
    switch (jitter) {
        case 'full':
            delay += randomNumberBetween(0, delay)
            break
        case 'equal':
            delay += delay / 2 + randomNumberBetween(0, delay / 2)
            break
        case 'decorrelated':
            delay += randomNumberBetween(delay, delay * 3)
            break
    }
    return delay
}
