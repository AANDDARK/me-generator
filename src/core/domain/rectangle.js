import ShapeCuboid from "./dto/shapeCuboid.js";

export default class Rectangle extends ShapeCuboid {
  #sides;
  
  /**
   * @param {string} name
   * @param {number[]} sides
   */
  constructor(name, sides) {
    super(name);
    this.#sides = this.#normalizeSides(sides);
    this.validate();
  }
  
  /**
   * Normalizes sides to always have 4 values [width, height, width, height]
   * @private
   */
  #normalizeSides(sides) {
    if (sides.length === 2) {
      return [sides[0], sides[1], sides[0], sides[1]];
    }
    return sides;
  }
  
  validate() {
    if (this.#sides.length !== 4) {
      throw new Error("Rectangle must have exactly 4 sides");
    }

    if (
      this.#sides.some(
        (side) => typeof side !== "number" || side <= 0 || !isFinite(side)
      )
    ) {
      throw new Error("All sides must be positive finite numbers");
    }

    if (
      this.#sides[0] !== this.#sides[2] ||
      this.#sides[1] !== this.#sides[3]
    ) {
      throw new Error(
        `Opposite sides of rectangle must be equal. Got sides: [${this.#sides.join(", ")}]`
      );
    }
  }
  
  area() {
    return Math.round(this.#sides[0] * this.#sides[1]);
  }
  
  perimeter() {
    return Math.round((this.#sides[0] + this.#sides[1]) * 2);
  }
  
  diagonal() {
    return Math.round(Math.sqrt(this.#sides[0] ** 2 + this.#sides[1] ** 2));
  }
  
  /**
   * Check if the shape can exist with given sides
   * @param {number[]} sides
   * @returns {boolean}
   */
  canExist(sides) {
    if (sides.length !== 4) return false;
    
    // Opposite sides must be equal
    const oppositeSidesEqual = (
      sides[0] === sides[2] && sides[1] === sides[3]
    );
    const allPositive = sides.every(side => side > 0 && isFinite(side));
    
    return oppositeSidesEqual && allPositive;
  }
}
