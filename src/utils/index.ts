export const randomJitter = (n: number): number => {
    const maxJitter = n * 0.2
    const min = n - maxJitter
    const max = n + maxJitter
    return Math.random() * (max - min) + min
}
