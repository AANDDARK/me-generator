import ShapeCuboid from "./dto/shapeCuboid.js";

export default class Rhombus extends ShapeCuboid {
  #sides;
  #angle;
  
  /**
   * @param {string} name
   * @param {number[]} sides - Array of side lengths (should all be equal)
   * @param {number} [angle] - Angle in degrees (optional, required for area/diagonal)
   */
  constructor(name, sides, angle) {
    super(name);
    this.#sides = sides;
    this.#angle = angle;
    this.validate();
  }
  
  validate() {
    if (!this.#sides || this.#sides.length === 0) {
      throw new Error("Sides array cannot be empty");
    }
    
    if (!this.#sides.every((e) => e === this.#sides[0])) {
      throw new Error("All sides must be equal");
    }
    
    if (
      this.#sides.some(
        (side) => typeof side !== "number" || side <= 0 || !isFinite(side)
      )
    ) {
      throw new Error("All sides must be positive finite numbers");
    }
    
    if (this.#angle !== undefined && this.#angle !== null) {
      if (this.#angle <= 0 || this.#angle >= 180) {
        throw new Error("Angle must be between 0° and 180°");
      }
    }
  }
  
  diagonal() {
    if (!this.#angle) {
      throw new Error("Angle is required to calculate diagonal");
    }
    
    const side = this.#sides[0];
    const angleRad = (this.#angle * Math.PI) / 180;
    
    const d1 = 2 * side * Math.sin(angleRad / 2);
    const d2 = 2 * side * Math.cos(angleRad / 2);
    
    return {
      diagonal1: Math.round(d1),
      diagonal2: Math.round(d2),
    };
  }

  area() {
    if (!this.#angle) {
      throw new Error("Angle is required to calculate area");
    }
    
    const side = this.#sides[0];
    const angleRad = (this.#angle * Math.PI) / 180;
    
    // Area = side² × sin(angle)
    return Math.round(side * side * Math.sin(angleRad));
  }
  
  perimeter() {
    return Math.round(this.#sides[0] * 4);
  }
}
