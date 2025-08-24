// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), 
// value1(number), value2(number).
// The function should return result of numbers after applying the chosen 
// operation.


function basicOp(operator, value1, value2){
    switch(operator){
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            if(value2 === 0){
                return "Is not possible to divide by 0!";
            }
            return value1 / value2;
        default:
            return "Error: Operator must be one of the follows -> (+, -, *, /)"
    }
}


let value1 = 5;
let value2 = 3;

let test1 = basicOp("+", value1, value2);
let test2 = basicOp("-", value1, value2);
let test3 = basicOp("*", value1, value2);
let test4 = basicOp("/", value1, value2);
let test5 = basicOp("e", value1, value2);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);