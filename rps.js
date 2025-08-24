// Rock, paper, scissors game. Have to return which player won; 
// In case of a draw return "Draw!"

const rps = (p1, p2) =>{
    if(p1 === p2){
        return "Draw!"
    }
    const rules = {rock: "scissors", scissors: "paper", paper: "rock"};
    if(p2 === rules[p1]){
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}

p1 = "rock";
p2 = "scissors";

test = rps(p1, p2);
console.log(test);