export const randomNumberBetween = (min: number, max: number): number => {
    return Math.random() * (max - min) + min
}

export const addRandomJitter = (delay: number): number => {
    const jitter = randomNumberBetween(0, delay * 0.2)
    return delay + jitter
}
