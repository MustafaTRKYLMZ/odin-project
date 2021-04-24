
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
let winnerScore=5;
window.addEventListener('click', playRound);
       
    
function playRound(e) {
    //winner Check////////////////////////////////////////////
    if((computerWinCount>=winnerScore)||(playerWinCount>=winnerScore)){
        return
        }
        
    const myChoose= e.path[0].id // I played
   // console.log("Your Choose",myChoose)
   //winner Check////////////////////////////////////////////
  
        const computerSelection = computerPlay();//Computer played
      //  console.log("computer",computerSelection);
        const winner=whoWin(myChoose,computerSelection)// we ant to know Who is Win?
      //  console.log("Winner",winner)
        if(winner =="player"){
            playerWinCount++
            winnerSet()
            if(parseInt(playerWinCount) ===5){
                let winner1= document.getElementById("whoWin1");
                winner1.innerText ="=Game Over=\nYou WİN";
                winner1.style.backgroundColor="green";
                 var attrResult = document.createAttribute("class");
                 attrResult.value = "winnerResult";
                  var hWin = document.getElementById("winner");
                  hWin.setAttributeNode(attrResult); 
                 return
             }
        } else if(winner ==="computer") {
            computerWinCount++;
            winnerSet()
            if(parseInt(computerWinCount) ===5){
                let winner2= document.getElementById("whoWin2");
                winner2.innerText ="=Game Over=\nYou LOSE";
                winner2.style.backgroundColor="red"
                var attr = document.createAttribute("class");
                 attr.value = "winnerResult";
                 var h = document.getElementById("winner");
                h.setAttributeNode(attr); 
                return
            }
        } else if (winner ==="Drawn") {
            var h1Computer= document.getElementById("computerChooseH1");
            h1Computer.innerText = 'Drawn';
            var h1Player= document.getElementById("yourChooseH1")
            h1Player.innerText = 'Drawn';
        }
    }

 
  function winnerSet () {
    var h1Player= document.getElementById("yourChooseH1")
    var h1Computer= document.getElementById("computerChooseH1");
    h1Computer.innerText = computerWinCount;
    h1Player.innerText = playerWinCount;
  }
  

  function whoWin (myChoose,computerSelection){//It is for one play. We want who win, we can learn who is winner
      let winner="";
    if(myChoose == computerSelection){
        winner +="Drawn";
        var h1= document.getElementById("computerChs")
        var h2= document.getElementById("yourChs")
        h2.innerText=myChoose;
        h1.innerText = computerSelection;
    } else if (myChoose == "rock"){
        if(computerSelection == "scissors"){
              winner +="player"
              getById(myChoose,computerSelection);
        } else {
            winner +="computer"
            getById(myChoose,computerSelection);
        }
    } else if (myChoose == "paper"){
        if(computerSelection == "rock"){
            winner +="player";
            getById(myChoose,computerSelection);
      } else {
          winner +="computer";
          getById(myChoose,computerSelection);
      }
    } else if (myChoose == "scissors"){
        if(computerSelection == "paper"){
            winner +="player";
            getById(myChoose,computerSelection);
        } else {
          winner +="computer";
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
function computerPlay () {
    let play = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * play.length); 
  let randomElement = play[randomIndex];
 return randomElement;
}
