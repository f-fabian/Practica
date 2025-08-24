// Function that can take any non-negative integer as an argument and return it 
// with its digits in descending order.

function descendingOrder(num){
    return Number(String(num).split("").sort().reverse().join(""));
}

let test = descendingOrder(41243532);
console.log(test);