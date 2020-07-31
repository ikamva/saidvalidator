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
let totalOdd = 0;
let totalEven = 0;
let totalMergedEven = "";
let controlNumber: number = 0;
let calculatedControlNumber: number = 0;

/**
 * Validate ID Number
 */
export const validate = (idNumber: number) => {
  init(idNumber);
  return calculatedControlNumber === controlNumber;
};

/**
 * Calculates Odd and Even numbers
 *
 */
const init = (idNumber: number) => {
  /**
   * Get Control number
   * The last digit is a control number
   */
  controlNumber = parseInt(idNumber.toString().split("")?.[12]);

  if (idNumber.toString().length >= 12) {
    // Reset
    calculatedControlNumber = 0;

    // Split ID number into an array
    const idNumberArray = idNumber.toString().split("", 12);

    // Get odd and even values
    setValidate(idNumberArray);
  }
};

const setValidate = (idNumberArray: string[]) => {
  // Reset
  totalOdd = 0;
  totalMergedEven = "";
  totalEven = 0;

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
  getTotalEvenDigits();

  // Add all numbers
  const compareControl = totalEven + totalOdd;

  // Get Calculated Control
  calculatedControlNumber =
    10 - parseInt(compareControl.toString().split("")?.[1]);
};

const getTotalEvenDigits = () => {
  const totalEvenDigit = (parseInt(totalMergedEven) * 2).toString().split("");

  // Get total Even numbers
  totalEvenDigit.forEach((value) => {
    totalEven += parseInt(value);
  });
};
