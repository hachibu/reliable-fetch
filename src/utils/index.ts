export const sleep = <T>(ms: number): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(<T>''), ms))
