class Parallelogram {
  side1;
  side2;
  side3;
  side4;
  angle1;
  angle2;
  angle3;
  angle4;

  constructor(side1, side2, angle1) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side1;
    this.side4 = this.side2;
    this.angle1 = angle1;
    this.angle2 = 180 - angle1;
    this.angle3 = angle1;
    this.angle4 = 180 - angle1;
  }
   // Check if a valid parallelogram exists
    isValidParallelogram() {
    // Rule 1: Both sides must be positive numbers
    if (this.side1 <= 0 || this.side2 <= 0) {
      console.error('Invalid: Sides must be positive numbers');
      return false;
    }

    // Rule 2: Angle must be between 0 and 180 degrees (exclusive)
    if (this.angle1 <= 0 || this.angle1 >= 180) {
      console.error('Invalid: Angle must be between 0 and 180 degrees');
      return false;
    }

    // Rule 3: Opposite sides must be equal (automatically satisfied by construction)
    // Rule 4: Opposite angles must be equal
    const angle2 = 180 - this.angle1; // Adjacent angle in parallelogram

    // Rule 5: Adjacent angles are supplementary (sum to 180°)
    if (Math.abs((this.angle1 + angle2) - 180) > 0.0001) {
      console.error('Invalid: Adjacent angles must sum to 180 degrees');
      return false;
    }

    return true;
  }
  get diagonal(){
    if (!this.isValidParallelogram()) {
      console.error('Cannot calculate diagonals: Invalid parallelogram');
      return null;
    }

    // Convert angle to radians
    const angleRad = (this.angle1 * Math.PI) / 180;

    // Using the law of cosines to find diagonals
    // d1² = a² + b² - 2ab*cos(angle1)
    // d2² = a² + b² - 2ab*cos(angle2)
    const angle2Rad = ((180 - this.angle1) * Math.PI) / 180;

    const d1Squared =
      Math.pow(this.side1, 2) +
      Math.pow(this.side2, 2) -
      2 * this.side1 * this.side2 * Math.cos(angleRad);

    const d2Squared =
      Math.pow(this.side1, 2) +
      Math.pow(this.side2, 2) -
      2 * this.side1 * this.side2 * Math.cos(angle2Rad);

    const d1 = Math.sqrt(d1Squared);
    const d2 = Math.sqrt(d2Squared);

    return {
      diagonal1: parseFloat(d1.toFixed(4)),
      diagonal2: parseFloat(d2.toFixed(4))
    }; 
  }
}