import { describe, expect, it } from '@jest/globals'
import RandomChaosError from './RandomChaosError'

describe('RandomChaosError', () => {
    it('is instance of Error', async () => {
        expect(new RandomChaosError()).toBeInstanceOf(Error)
    })
})
