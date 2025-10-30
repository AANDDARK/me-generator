/**
 * 
 * @param {number} countOfDigits 
 * @returns {number[]}
 */


export default function digitGenerator(countOfDigits){
    const digits = [];
    let count = 0; 
    while(count < countOfDigits){ 
        digits.push(Math.floor(Math.random() * 99))
        count++
    }
    return digits;
}