/**
 * Validates ID
 */
export default class SAIDValidator {
  private idNumber: number;
  private totalOdd = 0;
  private totalEven = 0;
  private totalMergedEven = "";
  private controlNumber: number;

  /**
   * This takes id number as an argument
   * @param idNumber
   */
  constructor(idNumber: number) {
    this.idNumber = idNumber;
  }

  /**
   * Validate ID Number
   */
  validate() {
    return this.calculateOddEven();
  }

  /**
   * Calculates Odd and Even numbers
   *
   */
  private calculateOddEven(): boolean {
    // Split ID number into an array
    const idNumberArray = this.idNumber.toString().split("", 12);

    /**
     * Get Control number
     * The last digit is a control number
     */
    this.controlNumber = +this.idNumber.toString().split("")[12];

    // Get odd and even values
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
    const hasControl = 10 - +compareControl.toString().split("")[1];

    // Check if is equal to control
    return hasControl == this.controlNumber;
  }

  private isEqualToControl() {}
}

const test1 = new SAIDValidator(8911206006082);
console.log(test1.validate());

const test2 = new SAIDValidator(8911206006082);
console.log(test2.validate());
