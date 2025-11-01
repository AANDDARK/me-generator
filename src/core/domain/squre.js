import ShapeCuboid from "./dto/shapeCuboid";

export default class Square extends ShapeCuboid {
  #sides;
  /**
   *
   * @param {number[]} sides
   */
  constructor(sides) {
    super(`square`);
    this.#sidesAgrigator(sides)
    this.validate();
  }
  validate() {
    if(!this.#sides.length === 4) throw new Error("the square need have 4 sides");
    if (!this.#sides.every((e) => e === e[0])) {
      throw new Error("all sides need be equal");
    }
    // Check if all sides are positive numbers
    if (
      this.#sides.some(
        (side) => typeof side !== "number" || side <= 0 || !isFinite(side),
      )
    ) {
      throw new Error("All sides must be positive finite numbers");
    }
  }
   area() {
    return this.#sides[0] * this.#sides[1];
  }
  perimeter() {
    return this.#sides[0] * 4;
  }
  diagonal() {
    return Math.sqrt(2) * this.#sides[0];
  }
  /**
   * 
   * @param {number[]} sides 
   */
  #sidesAgrigator(sides){
    switch(sides.length){
      case 1: return Array(4).fill(sides[0])
      case 2: return [...sides.slice(0,2), ...sides.slice(0,2)];
      default: return [...sides]
    } 
  }
}
