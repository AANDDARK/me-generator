/**
 * Represents a question entry for a geometry problem.
 *
 * @typedef {Object} QE
 * @property {string} text - The question text. Use `%d` placeholders for numeric values.
 * @property {number} countOfDigit - Number of numeric values required for this question.
 * @property {string} on
 */

/**
 * A map of shape names to an array of question entries.
 *
 * @type {Map<string, QE[]>}
 */
export const questions = new Map();

questions.set("square", [
  {
    text: "The perimeter of a square with side %d is ___",
    countOfDigit: 1,
    on: "onperimeter"
  },
  {
    text: "The area of a square with side %d is ___",
    countOfDigit: 1,
    on: "onarea"
  },
  {
    text: "The diagonal of a square with side %d is ___",
    countOfDigit: 1,
    on: "ondiagonal"
  },
  {
    text: "Can a square exist with sides %d and %d?",
    countOfDigit: 2,
    on: "oncanable"
  }
]);

/**
 * List of supported shape names.
 *
 * @type {string[]}
 */
export const shapes = ["square"];
