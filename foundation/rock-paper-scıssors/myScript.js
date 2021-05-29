console.log("Hello World 4")
//Rock, paper, scissors,
/*
if game smal 3 and equal 3 {
    if {
        player equal rock and computer equal scissors OR hlayer equal PAPER and computer equal ROCK OR player SCİSSORS and computer PAPER 
game ++
player WİN
}
if player equal computer 
together
else Your LOSE

}




*/
let playerWinCount=0;
let computerWinCount=0;

function computerPlay () {
    let play = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * play.length); 
  let randomElement = play[randomIndex];
 return randomElement;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
 
    if(playerSelection == computerSelection){
        console.log("Drawn")
    } else if (playerSelection == "rock"){
        if(computerSelection == "scissors"){
              playerWinCount++;
              console.log("Player selection: ", playerSelection, "\n", "Computer Selection: ", computerSelection)
              console.log("Score: ", playerWinCount, " : ", computerWinCount)
        } else {
            computerWinCount++;
            console.log("Player selection: ", playerSelection, "\n", "Computer Selection: ", computerSelection)
            console.log("Score: ", playerWinCount, " : ", computerWinCount)
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerWinCount++;
            console.log("Player selection: ", playerSelection, "\n", "Computer Selection: ", computerSelection)
            console.log("Score: ", playerWinCount, " : ", computerWinCount)
      } else {
          computerWinCount++;
          console.log("Player selection: ", playerSelection, "\n", "Computer Selection: ", computerSelection)
          console.log("Score: ", playerWinCount, " : ", computerWinCount)
      }
    } else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            playerWinCount++;
            console.log("Player selection: ", playerSelection, "\n", "Computer Selection: ", computerSelection)
            console.log("Score: ", playerWinCount, " : ", computerWinCount)
      } else {
          computerWinCount++;
          console.log("Player selection: ", playerSelection, "\n", "Computer Selection: ", computerSelection)
          console.log("Score: ", playerWinCount, " : ", computerWinCount)
      }
    } 
    
   
  
    
  
  }
   

function game() {
 
    for ( i=1; i<=5; i++){
        const playerSelection = prompt("Write your play: ");
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
      //  console.log("Player: ", playerSelection, "\n","Computer: ",computerSelection);
      }
      if(playerWinCount >computerWinCount){
          console.log("Your WİN!!!")
      }else if (playerWinCount <computerWinCount){
        console.log("Your LOSE!!!")
      }
}
console.log("Game Result", game())
  