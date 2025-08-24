// Function to convert a name into initials. The output should be two capital 
// letters with a dot separating them.

function abbrevName(name){
  let array = name.split(" ");
  return array[0][0].toUpperCase() + "." + array[1][0].toUpperCase();
}

const name = "facundo sansat"

test = abbrevName(name);
console.log(test);