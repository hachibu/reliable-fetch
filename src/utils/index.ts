export const randomNumberBetween = (min: number, max: number): number => {
    return Math.random() * (max - min) + min
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
