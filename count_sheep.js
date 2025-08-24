// Function that counts the number of sheep present in the array 
// (true means present).

function countSheeps(sheep) {
  let total = 0;
  
  for(let i = 0; i < sheep.length; i++){
    if(sheep[i]){
      total++;
    }
  }
  return total;
}

let sheep = [true, true];

test = countSheeps(sheep);
console.log(test);