import { validateSAID, isSAID, getGender, getDOB } from '../src/index'
import { expect } from 'chai';

describe('validate', () => {

  const idNumber = '1601178295089';
  const invalidID = '1601016372081'

  it('should validate ID Number and return false', () => {
    const result = isSAID(invalidID)
    expect(result).to.be.false;
  })

  it('should validate ID Number and return true', () => {
    const result = isSAID(idNumber)
    expect(result).to.be.true;
  })

  it('should validate ID Number and return 17 Jan 2016', () => {
    const result = getDOB(idNumber)
    expect(result).to.equal('17 Jan 2016');
  })

  it('should validate ID Number and return 17 Apr 1939', () => {
    const result = getDOB('3904176943181', 90)
    expect(result).to.equal('17 Apr 1939');
  })

  it('should validate ID Number and return Invalid ID', () => {
    const result = getDOB(invalidID)
    expect(result).to.equal('Invalid ID');
  })

  it('should validate ID Number and return Male', () => {
    const result = getGender(idNumber);
    expect(result).to.equal('Male');
  })

  it('should validate ID Number and return object {valid: false, gender: Invalid ID, citizenship: Invalid ID, dob: Invalid ID}', () => {
    const result = validateSAID(invalidID)
    expect(result.valid).to.be.false;
    expect(result.gender).to.equal('Invalid ID');
    expect(result.dob).to.equal('Invalid ID');
    expect(result.citizenship).to.equal('Invalid ID');
  })

  /**
   * Add an valid ID Number here
   */
  it('should validate ID Number and return object {valid: true, gender: Male, citizenship: SA, dob: 17 Jan 2016}', () => {
    const result = validateSAID(idNumber)
    expect(result.valid).to.be.true;
    expect(result.gender).to.equal('Male');
    expect(result.dob).to.equal('17 Jan 2016');
    expect(result.citizenship).to.equal('SA');
  })
})
