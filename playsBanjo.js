// Function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", 
// you are playing banjo!

function areYouPlayingBanjo(name){
    return name + (name[0].toLowerCase() === "r" ? " plays" : " does not play") + " banjo";
}

const name = "Ringo";

test = areYouPlayingBanjo(name);
console.log(test);