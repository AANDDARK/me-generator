import ShapeCuboid from "./dto/shapeCuboid.js";

export default class Square extends ShapeCuboid {
  #sides;
  
  /**
   * @param {number[]} sides
   */
  constructor(sides) {
    super("square");
    this.#sides = this.#sidesAgrigator(sides);
    this.validate();
  }
  
  validate() {
    if (this.#sides.length !== 4) {
      throw new Error("The square must have 4 sides");
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
  }
  
  area() {
    return Math.round(this.#sides[0] * this.#sides[0]);
  }
  
  perimeter() {
    return Math.round(this.#sides[0] * 4);
  }
  
  /**
   * Check if the shape can exist with given sides
   * @param {number[]} sides
   * @returns {boolean}
   */
  canExist(sides) {
    if (sides.length !== 4) return false;
    
    // All sides must be equal
    const allEqual = sides.every(side => side === sides[0]);
    const allPositive = sides.every(side => side > 0 && isFinite(side));
    
    return allEqual && allPositive;
  }
  
  diagonal() {
    return Math.round(Math.sqrt(2) * this.#sides[0]);
  }
  
  /**
   * Check if the shape can exist with given sides
   * @param {number[]} sides
   * @returns {boolean}
   */
  canExist(sides) {
    if (sides.length !== 4) return false;
    
    // All sides must be equal and positive
    const allEqual = sides.every(side => side === sides[0]);
    const allPositive = sides.every(side => side > 0 && isFinite(side));
    
    return allEqual && allPositive;
  }
  
  /**
   * @param {number[]} sides 
   * @returns {number[]}
   */
  #sidesAgrigator(sides) {
    switch(sides.length) {
      case 1: 
        return Array(4).fill(sides[0]);
      case 2: 
        return [...sides.slice(0, 2), ...sides.slice(0, 2)];
      default: 
        return [...sides];
    }
  }
}
