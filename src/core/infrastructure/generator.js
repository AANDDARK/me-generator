import { questions, shapes } from "./constanst.js";

/**
 * Generates an array of random integers (0–98).
 *
 * @function digitGenerator
 * @param {number} countOfDigits - The number of random digits to generate.
 * @returns {number[]} An array of randomly generated digits.
 *
 * @example
 * digitGenerator(3);
 * // ➜ [12, 87, 45]
 */
function digitGenerator(countOfDigits) {
  const digits = [];
  let count = 0;
  while (count < countOfDigits) { 
    digits.push(Math.floor(Math.random() * 99));
    count++;
  }
  return digits;
}

/**
 * Replaces all `%d` placeholders in a string with numbers from a provided array.
 *
 * @function TaskParser
 * @param {string} text - The text that contains `%d` placeholders.
 * @param {number[]} values - The values to substitute into the text.
 * @returns {string} The parsed text with `%d` replaced by numbers.
 *
 * @example
 * TaskParser("Add %d and %d", [5, 3]);
 * // ➜ "Add 5 and 3"
 */
function TaskParser(text, values) {
  let countOfChangebles = 0;
  return text.replace(/%d/g, () => values[countOfChangebles++]);
}

/**
 * Generates a math question based on a given shape.
 *
 * @function generator
 * @param {string} shape - The shape category to pick the question from.
 * @throws {Error} Throws an error if the shape does not exist.
 * @returns {{question: string, on: string, digits: number[]}}
 *          Returns an object with the generated question, a label (`on`),
 *          and the digits used.
 *
 * @example
 * generator("triangle");
 * // ➜ { question: "The sum of %d and %d", on: "triangle", digits: [43, 18] }
 */
export default function generator(shape) {
  const texts = questions.get(shape);

  if (!texts) throw new Error(`Unknown shape: ${shape}`);

  const int = Math.floor(Math.random() * texts.length);
  const digits = digitGenerator(texts[int].countOfDigit);

  return {
    question: TaskParser(texts[int].text, digits),
    on: texts[int].on,
    digits
  };
}

/**
 * Selects a random shape from the `shapes` array.
 *
 * @function randomShape
 * @returns {string} A random shape string.
 *
 * @example
 * randomShape();
 * // ➜ "circle"
 */
export function randomShape() {
  const int = Math.floor(Math.random() * shapes.length);
  return shapes[int];
}


