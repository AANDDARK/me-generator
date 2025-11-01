import ShapeCuboid from "./dto/shapeCuboid.js";

export default class Rhombus extends ShapeCuboid {
  #sides;
  #angle;
  /**
   *
   * @param {string} name
   * @param {number[]} sides
   */
  constructor(name, sides, angle) {
    super(`${name}`);
    this.#sides = sides;
    if (angle) {
      this.#angle = angle;
    }
    this.validate();
  }
  validate() {
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
  diagonal() {
    if (!this.#angle) {
      throw new Error("need angle for diagonal");
    }
    const side = this.#sides[0];
    const angleInDegrees = this.#angle;
    if (side <= 0 || angleInDegrees <= 0 || angleInDegrees >= 180) {
      throw new Error(
        "Invalid input: side must be positive, angle must be between 0° and 180°",
      );
    }
    const angleRad = (angleInDegrees * Math.PI) / 180;
    const d1 = 2 * side * Math.sin(angleRad / 2);
    const d2 = 2 * side * Math.cos(angleRad / 2);
    return {
      diagonal1: Math.round(d1),
      diagonal2: Math.round(d2),
    };
  }

  area() {
    const diagonals = this.diagonal();
    return Math.round((diagonals.diagonal1 * diagonals.diagonal2) / 2);
  }
  perimeter() {
    return Math.round(this.#sides[0] * 4);
  }
}
