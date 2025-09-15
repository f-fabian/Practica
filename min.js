// Given an array of integers your solution should find the smallest integer.
let arr = [78, 56, 232, 12, 8, "a"];
const isInt = (currentValue) => typeof currentValue === "number";
/* "..." is the spread operator. It takes an iterable and unpacks its elements
 one by one, as if you wrote them separated by commas.
 Math.min() expects individual arguments; if you pass an array directly
 it returns NaN (Not-a-Number).*/
function smallestInt(array){
    if (!Array.isArray(array)){
        return "\nInvalid input: A list is expected.";
    } else if (array.every(isInt)) {
        return Math.min(...array);
    } else {
    return "\nInvalid unput: The list must be composed only by integers.";
    }
}

let result = smallestInt(arr);
console.log(result);