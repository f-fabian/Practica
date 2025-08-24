// Function that check if a number is odd or even.

function evenOrOdd(number) {
  return number === 0 ? "The number is 0" : (number % 2 === 0 ? 'Even' : 'Odd');
}

const num = -4;

test = evenOrOdd(num);
console.log(test);