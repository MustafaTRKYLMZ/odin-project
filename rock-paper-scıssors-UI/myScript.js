
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





document.getElementById("myBtn").addEventListener("click", function(e) {
    e.currentTarget.addEventListener(console.log("Hello"))
  
    document.getElementById("result").innerHTML = e;
  });
  const buttons = document.querySelector(`button[data-key="${e.keyCode}"]`);
*/ 
let playerWinCount=0;
let computerWinCount=0;
let winnerScore=5;
window.addEventListener('click', playRound);
       
    
function playRound(e) {
    //winner Check////////////////////////////////////////////
    if((computerWinCount>=winnerScore)||(playerWinCount>=winnerScore)){
        return
        }
if(parseInt(playerWinCount) ===5){
   let winner1= document.getElementById("whoWin1");
   winner1.innerText ="=Game Over=\nYou WİN";
   winner1.style.backgroundColor="green";

    var attr = document.createAttribute("class");
     attr.value = "winnerResult";
     var h = document.getElementById("winner");
    h.setAttributeNode(attr); 
} else if(parseInt(computerWinCount) ===5){
    let winner2= document.getElementById("whoWin2");
    winner2.innerText ="=Game Over=\nYou LOSE";
    winner2.style.backgroundColor="red"

    var attr = document.createAttribute("class");
     attr.value = "winnerResult";
     var h = document.getElementById("winner");
    h.setAttributeNode(attr); 
 }
    const myChoose= e.path[0].id
    console.log("Your Choose",myChoose)
   //winner Check////////////////////////////////////////////
  
        const computerSelection = computerPlay();
        console.log("computer",computerSelection);
        const winner=whoWin(myChoose,computerSelection)
        console.log("Winner",winner)
        if(winner =="player"){
            playerWinCount++
            var attr = document.createAttribute("class");
            attr.value = "winner";
            var h = document.getElementById("yourChoose");
            var h1= document.getElementById("yourChooseH1")
            h1.innerText = playerWinCount;
            h.setAttributeNode(attr); 
        } else if(winner ==="computer") {
            computerWinCount++;
            var attr = document.createAttribute("class");
            attr.value = "winner";
            var h = document.getElementById("computerChoose");
            var h1= document.getElementById("computerChooseH1");
            h1.innerText = computerWinCount;
            h.setAttributeNode(attr); 
        }
        console.log("Score: ", playerWinCount, " : ", computerWinCount)
        }

//  }  
  //  }
 
  function winnerSet (hId,h1Id) {
    var attr = document.createAttribute("class");
       
    attr.value = "winner";
    var h = document.getElementById(hId);
    var h1= document.getElementById(h1Id)
    h1.innerText = playerWinCount;
    h.setAttributeNode(attr); 
  }
  

  function whoWin (myChoose,computerSelection){//It is for one play. We want who win
      let winner="";
    if(myChoose == computerSelection){
        winner +="Drawn";
    } else if (myChoose == "rock"){
        if(computerSelection == "scissors"){
              winner +="player"
              console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
              getById(myChoose,computerSelection);
        } else {
            winner +="computer"
            console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
            getById(myChoose,computerSelection);
        }
    } else if (myChoose == "paper"){
        if(computerSelection == "rock"){
            winner +="player";
            console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
            getById(myChoose,computerSelection);
          
      } else {
          winner +="computer";
          console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
          getById(myChoose,computerSelection);
       
      }
    } else if (myChoose == "scissors"){
        if(computerSelection == "paper"){
            winner +="player";
            console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
            getById(myChoose,computerSelection);
        } else {
          winner +="computer";
          console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
          getById(myChoose,computerSelection);
      }
  }
  return winner;
}

function getById(myChoose,computerSelection) {
    var h1= document.getElementById("computerChs")
    var h2= document.getElementById("yourChs")
    h2.innerText=myChoose;
    h1.innerText = computerSelection;
}
   
/*
function game(myChoose,computerSelection) {

    let playerWinCount=0;
    let computerWinCount=0;

    
    console.log("computer",computerSelection);
      
       const playerSelection = myChoose;
      
   //     playRound(playerSelection, computerSelection);
      //  console.log("Player: ", playerSelection, "\n","Computer: ",computerSelection);

    if(myChoose == computerSelection){
        console.log("Drawn")
    } else if (myChoose == "rock"){
        if(computerSelection == "scissors"){
              playerWinCount++;
              console.log("Player selection: ", playerSelection, "\n", "Computer Selection: ", computerSelection)
              console.log("Score: ", playerWinCount, " : ", computerWinCount)
        } else {
            computerWinCount++;
            console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
            console.log("Score: ", playerWinCount, " : ", computerWinCount)
        }
    } else if (myChoose == "paper"){
        if(computerSelection == "rock"){
            playerWinCount++;
            console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
            console.log("Score: ", playerWinCount, " : ", computerWinCount)
      } else {
          computerWinCount++;
          console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
          console.log("Score: ", playerWinCount, " : ", computerWinCount)
      }
    } else if (myChoose == "scissors"){
        if(computerSelection == "paper"){
            playerWinCount++;
            console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
            console.log("Score: ", playerWinCount, " : ", computerWinCount)
        } else {
          computerWinCount++;
          console.log("Player selection: ", myChoose, "\n", "Computer Selection: ", computerSelection)
          console.log("Score: ", playerWinCount, " : ", computerWinCount)
      }
    /*
        if(playerWinCount >computerWinCount){
            console.log("Your WİN!!!")
        }else if (playerWinCount <computerWinCount){
        console.log("Your LOSE!!!")
        }
    }
} 


*/

function computerPlay () {
    let play = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * play.length); 
  let randomElement = play[randomIndex];
 return randomElement;
}
