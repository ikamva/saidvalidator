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
export default class SAIDValidator {
  // private idNumber: number;
  private totalOdd = 0;
  private totalEven = 0;
  private totalMergedEven = "";
  private controlNumber: number = 0;
  private calculatedControlNumber: number = 0;

  /**
   * This takes id number as an argument
   * @param idNumber
   */
  constructor(idNumber: number) {
    this.init(idNumber);
  }

  /**
   * Validate ID Number
   */
  validate() {
    return this.calculatedControlNumber === this.controlNumber;
  }

  /**
   * Calculates Odd and Even numbers
   *
   */
  private init(idNumber: number): void {
    // Split ID number into an array
    const idNumberArray = idNumber.toString().split("", 12);

    /**
     * Get Control number
     * The last digit is a control number
     */
    this.controlNumber = +idNumber.toString().split("")[12];

    // Get odd and even values
    this.setValidate(idNumberArray);
  }

  private setValidate(idNumberArray: string[]) {
    idNumberArray.forEach((value, index) => {
      // If Odd
      if (index % 2 == 0) {
        this.totalOdd += +value;
      } // If even
      else {
        // Concatenate all even values
        this.totalMergedEven += value;
      }
    });

    // Get Event Digit and Split
    const totalEvenDigit = (+this.totalMergedEven * 2).toString().split("");

    // Get total Even numbers
    totalEvenDigit.forEach((value) => {
      this.totalEven += +value;
    });

    // Add all numbers
    const compareControl = this.totalEven + this.totalOdd;

    // Get Calculated Control
    this.calculatedControlNumber = 10 - +compareControl.toString().split("")[1];
  }
}
