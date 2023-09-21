import { validateSAID, isSAID } from '../src/index'
import { expect } from 'chai';

describe('validate', () => {
  it('should validate ID Number and return false', () => {
    const result = isSAID('8010206006081')
    expect(result).to.be.false;
  })

  it('should validate ID Number and return true', () => {
    const result = isSAID('0108235729081')
    expect(result).to.be.true;
  })

  it('should validate ID Number and return object {valid: false, gender: undefined, citizenship: undefined}', () => {
    const result = validateSAID('8010206006081')
    expect(result.valid).to.be.false;
    expect(result.gender).to.equal(undefined);
    expect(result.citizenship).to.equal(undefined);
  })

  /**
   * Add an valid ID Number here
   */
  it('should validate ID Number and return object {valid: true, gender: Male, citizenship: SA}', () => {
    const result = validateSAID('0108235729081')
    expect(result.valid).to.be.true;
    expect(result.gender).to.equal('Male');
    expect(result.citizenship).to.equal('SA');
  })
})
