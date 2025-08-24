// An isogram is a word that has no repeating letters, consecutive or 
// non-consecutive. 
// Function that determines whether a string that contains only letters is an 
// isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    let i, j;
    str = str.toLowerCase();
    
    for(i = 0; i < str.length; i++){
        for(j = i + 1; j < str.length; j++){
            if(str[j] === str[i]){
                return false;
            }
        }
    }
    return true;
}

let str = "Aba"
let test = isIsogram(str);
console.log(test);