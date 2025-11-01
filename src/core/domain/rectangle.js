import ShapeCuboid from "./dto/shapeCuboid";

export default class Rectangle extends ShapeCuboid {
  #sides;
  /**
   *
   * @param {string} name
   * @param {number[]} sides
   */
  constructor(name, sides) {
    super(`${name}`);
    this.#sides = sides;
    this.validate();
  }
  validate() {
    // Check if we have exactly 4 sides
    if (this.#sides.length !== 4) {
      throw new Error("Rectangle must have exactly 4 sides");
    }

    // Check if all sides are positive numbers
    if (
      this.#sides.some(
        (side) => typeof side !== "number" || side <= 0 || !isFinite(side),
      )
    ) {
      throw new Error("All sides must be positive finite numbers");
    }

    // Check if opposite sides are equal (fix: use === instead of !==)
    if (
      this.#sides[0] !== this.#sides[2] ||
      this.#sides[1] !== this.#sides[3]
    ) {
      throw new Error(
        `Opposite sides of rectangle must be equal. Got sides: [${this.#sides.join(", ")}]`,
      );
    }
  }
  area() {
    return this.#sides[0] * this.#sides[1];
  }
  perimeter() {
    return this.#sides[0] * 2 + this.#sides[1] * 2;
  }
  diagonal() {
    return Math.sqrt(this.#sides[0] ^ (2 + this.#sides[1]) ^ 2);
  }
}
