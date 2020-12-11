/**
 * Validates ID
 *
 * How SA ID Works
 *
 * YYMMDDGSSSCAZ 
 *
 * YYMMDD : Date of birth (DOB) 
 * G : Gender. 0-4 Female; 5-9 Male 
 * SSS : Sequence No. for DOB/G combination 
 * C : Citizenship. 0 SA; 1 Other 
 * A : Usually 8, or 9 but can be other values 
 * Z : Calculated control (check) digit 
 *
 * Ref: https://dirkstrauss.com/south-african-id-number-validation-in-c/
 *
 */


/**
   * Get Control number
   * The last digit is a control number
   */
const controlNumber = (idNumber: number) => {
  return parseInt(idNumber.toString().split("")?.[12]);
}

/**
 * 
 * @param idNumberArray 
 * return Compare Control Number
 */
const calculateControlNumber = (idNumber: number) => {
  // Reset
  let totalOdd = 0;
  let totalMergedEven = "";
  let totalEven = 0;

  // Split ID Number 
  const idNumberArray = idNumber.toString().split("", 12);

  // Add Odd and Even number
  idNumberArray.forEach((value, index) => {
    // If Odd
    if (index % 2 == 0) {
      totalOdd += parseInt(value);

    } // If even
    else {
      // Concatenate all even values
      totalMergedEven += value;
    }
  });


  // Get Event Digit and Split
  totalEven = getTotalEven(totalMergedEven);

  // Add all numbers
  const compareControl = totalEven + totalOdd;

  // Get Calculated Control
  return compareControl % 10 == 0 ? 0 :
    10 - parseInt(compareControl.toString().split("")?.[1]);

};
/**
 * Calculates Total Even Digits
 */
const getTotalEven = (mergedEven: string) => {
  const totalEvenDigit = (parseInt(mergedEven) * 2).toString().split("");
  let even = 0;

  // Get total Even numbers
  totalEvenDigit.forEach((value) => {
    even += parseInt(value);
  });

  return even;
};


/**
 * Validate ID Number
 * @param idNumber
 */
const validate = (idNumber: number) => {
  return calculateControlNumber(idNumber) === controlNumber(idNumber);
};

// Export validate function
export default validate;
