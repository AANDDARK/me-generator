export default class ShapeCuboid {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
    this.name = name;
  }

  area() {
    throw new Error(`${this.name}: Method 'area()' must be implemented`);
  }

  perimeter() {
    throw new Error(`${this.name}: Method 'perimeter()' must be implemented`);
  }

  validate() {
    throw new Error(`${this.name}: Method 'validate()' must be implemented`);
  }

  diagonal() {
    throw new Error(`${this.name}: Method 'diagonal()' must be implemented`);
  }

  info() {
    this.validate();

    return {
      shape: this.name,
      area: this.area(),
      perimeter: this.perimeter(),
    };
  }
}
