import { WHITE_SPACES } from "./constants.js";

/**
 * 
 * @param {string} text 
 * @param {number[]} values
 * @returns {string}
 */
export default function TaskParser(text, values) {
    let countOfChangebles = 0;
    const parsedText = text.split(WHITE_SPACES).map((e) => {
        if (e === "%d") {
            return values[countOfChangebles++];
        }
        return e;
    });
    return parsedText.join(" ");
}
