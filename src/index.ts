/**
 * Validates South African ID Number
 *
 * The South African ID number has a specific structure:
 * YYMMDDGSSSCAZ
 * 
 * YYMMDD : Date of birth (DOB)
 * G : Gender. 0-4 Female; 5-9 Male
 * SSS : Sequence No. for DOB/G combination
 * C : Citizenship. 0 SA; 1 Other
 * A : Usually 8, or 9 but can be other values
 * Z : Calculated control (check) digit
 *
 * Reference: https://dirkstrauss.com/south-african-id-number-validation-in-c/
 */

/**
 * Get the control number (last digit) of the ID number
 */
const getControlNumber = (idNumber: string) => parseInt(idNumber.charAt(12));

/**
 * Calculate the control number for validation
 */
const calculateControlNumber = (idNumber: string) => {
  let totalOdd = 0;
  let totalEven = 0;

  for (let i = 0; i < 12; i++) {
    const digit = parseInt(idNumber.charAt(i));

    if (i % 2 === 0) {
      totalOdd += digit;
    } else {
      totalEven += getTotalEven(digit);
    }
  }

  const compareControl = (totalEven + totalOdd) % 10;
  return compareControl === 0 ? 0 : 10 - compareControl;
};

/**
 * Calculate the total of even digits
 */
const getTotalEven = (digit: number) => {
  const doubled = digit * 2;
  return doubled < 10 ? doubled : Math.floor(doubled / 10) + (doubled % 10);
};

/**
 * Determine the gender based on the G digit of the ID number
 */
const getGender = (idNumber: string) => {
  const genderDigit = parseInt(idNumber.toString().charAt(6));
  return genderDigit < 5 ? 'Female' : 'Male';
};

/**
 * Determine the citizenship based on the C digit of the ID number
 */
const getCitizenship = (idNumber: string) => {
  const citizenshipDigit = parseInt(idNumber.toString().charAt(10));
  return citizenshipDigit === 0 ? 'SA' : 'Other';
};

const isSAID = (idNumber: string) => {
  return calculateControlNumber(idNumber) === getControlNumber(idNumber);
}

/**
 * Validate South African ID Number and return a result object
 */
const validateSAID = (idNumber: string): { valid: boolean; gender?: 'Male' | 'Female'; citizenship?: 'SA' | 'Other' } => {
  const valid = isSAID(idNumber);
  const gender = getGender(idNumber);
  const citizenship = getCitizenship(idNumber);

  return !valid ? { valid } : {
    valid,
    gender,
    citizenship
  };
};

export { validateSAID, isSAID, getGender, getCitizenship };
