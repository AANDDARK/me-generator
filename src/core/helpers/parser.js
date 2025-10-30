/**
 * 
 * @param {string} text 
 * @param {number[]} values
 * @returns {string}
 */
export default function TaskParser(text, values) {
    let countOfChangebles = 0;
    // Use a regex to replace %d with actual values
    const parsedText = text.replace(/%d/g, () => {
        return values[countOfChangebles++];
    });
    return parsedText;
}