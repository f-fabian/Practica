//finds the next integral perfect square after the one passed as a parameter.

const findNextSquare = (sq) => {
    let square = Math.sqrt(sq)
    return Number.isInteger(square) ? Math.pow(square + 1, 2) : -1;
}

let test = 121;
console.log(findNextSquare(test));