import crypto from 'crypto'

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
