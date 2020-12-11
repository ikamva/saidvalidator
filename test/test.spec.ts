import validate from '../src/index'
import { expect } from 'chai';

describe('validate', () => {
    it('should validate ID Number and return false', () => {
        expect(validate(8911202007082)).to.false
    })

    /**
     * Add an valid ID Number here
     */
    // it('should validate ID Number and return true', () => {
    //     expect(validate(8913206006082)).to.true
    // })
})