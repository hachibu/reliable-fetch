export const randomNumberBetween = (min: number, max: number): number => {
    return Math.random() * (max - min) + min
}

export const randomNumberWithinJitterPeriod = (n: number): number => {
    const maxJitter = n * 0.2
    const min = n - maxJitter
    const max = n + maxJitter
    return randomNumberBetween(min, max)
}
