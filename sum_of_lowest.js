/* Create a function that returns the sum of the two lowest positive numbers 
given an array of minimum 4 positive numbers. */

let array = [1.3, 19, 5, 42, 2, 4] // output should be 3.3.

const sumOfLowest = (array) => {
    if (!Array.isArray(array)){
        return "\nInvalid input: A list is expected.";
    } else if (array.some(currentValue => typeof currentValue !== "number")) {
        return "\nInvalid input: Only numbers accepted.";
    }

    let sorted = array.sort((a, b) => a - b);
    return sorted[0] + sorted[1];
}

console.log(sumOfLowest(array));