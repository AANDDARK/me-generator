export default class Task {
  #text;
  #answer;

  /**
   *
   * @param {string} text
   * @param {string} answer
   */
  constructor(text, answer) {
    this.#validate(text, answer);
    this.#text = text;
    this.#answer = answer;
  }

  check(userAnswer) {
    if (userAnswer === this.#answer) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Validates constructor parameters
   * @private
   */
  #validate(text, answer) {
    if (!text || typeof text !== "string" || text.trim().length === 0) {
      throw new Error("Task text must be a non-empty string");
    }

    if (answer === null || answer === undefined) {
      throw new Error("Task answer is required");
    }
  }

  get text() {
    return this.#text;
  }

  get answer() {
    return this.#answer;
  }
}
