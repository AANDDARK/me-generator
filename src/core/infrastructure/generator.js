import { questions, shapes } from "./constanst.js";

/**
 * Generates an array of random integers (1–99).
 * @param {number} countOfDigits
 * @returns {number[]}
 */
function digitGenerator(countOfDigits) {
  const digits = [];
  for (let i = 0; i < countOfDigits; i++) {
    // Generate from 1 to 99 (avoid 0 for geometry)
    digits.push(Math.floor(Math.random() * 99) + 1);
  }
  return digits;
}

/**
 * Generates a random angle between 30° and 150° for rhombus
 * @returns {number}
 */
function angleGenerator() {
  return Math.floor(Math.random() * 120) + 30; // 30-150 degrees
}

/**
 * Replaces all `%d` placeholders in a string with numbers.
 * @param {string} text
 * @param {number[]} values
 * @returns {string}
 */
function TaskParser(text, values) {
  let countOfChangebles = 0;
  return text.replace(/%d/g, () => values[countOfChangebles++]);
}

/**
 * Generates a math question based on a given shape.
 * @param {string} shape
 * @returns {{question: string, on: string, digits: number[], angle?: number}}
 */
export default function generator(shape) {
  const texts = questions.get(shape);

  if (!texts) {
    throw new Error(`Unknown shape: ${shape}`);
  }

  const randomIndex = Math.floor(Math.random() * texts.length);
  const selectedQuestion = texts[randomIndex];
  
  const digits = digitGenerator(selectedQuestion.countOfDigit);
  

  const result = {
    question: TaskParser(selectedQuestion.text, digits),
    on: selectedQuestion.on,
    digits
  };
  

  if (shape === "rhombus" && selectedQuestion.on === "onarea") {
    result.angle = angleGenerator();
  
    result.question = TaskParser(selectedQuestion.text, [...digits, result.angle]);
  }
  
  return result;
}

/**
 * Selects a random shape from the shapes array.
 * @returns {string}
 */
export function randomShape() {
  const randomIndex = Math.floor(Math.random() * shapes.length);
  return shapes[randomIndex];
}