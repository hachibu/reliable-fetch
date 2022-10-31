import reliableFetch, { ReliableFetch } from './index'
import { describe, expect, it } from '@jest/globals'

describe('reliableFetch', () => {
    const input = 'http://localhost'

    it('returns instance of ReliableFetch', () => {
        expect(reliableFetch(input)).toBeInstanceOf(ReliableFetch)
    })
})
