import { describe, expect, it } from '@jest/globals'
import ReliableFetchChaosError from './ReliableFetchChaosError'

describe('ReliableFetchChaosError', () => {
    it('is instance of Error', async () => {
        expect(new ReliableFetchChaosError()).toBeInstanceOf(Error)
    })
})
