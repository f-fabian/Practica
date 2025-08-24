// Function that finds the average value of the items in the given array
const findAverage = (array) => {
    if(array.length !== 0){
        let sum = 0;
        
        for(let i = 0; i < array.length; i++){
            sum += array[i];
        }
        let total = sum / array.length;
        return total;
    }
    return 0;
}

let values = [7, 3, 4, 1, 4, 1, 2, 5, 2, 1, 4, 13, 24];

test = findAverage(values);
console.log(test);