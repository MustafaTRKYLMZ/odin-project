const Game = () =>{
let players = []
 let result =0
 let play = true
 const getLocal = () => {
        const storageItem =  JSON.parse(localStorage.getItem("players"))
       // players.push(storageItem)
        storageItem.forEach(element => {
            players.push(element)
        })
    }
    const update =() => {
        playerResult.innerHTML=game.result
        let playerOne= document.getElementById("playerOne")//div id
        let playerTwo= document.getElementById("playerTwo")
        const names=game.players.map(nam => nam.playerName);//input item
        const firsPlayerName=names[0]
        const scores = game.players.map(nam => nam.playerScore)
        const firstPlayerScore = scores[0]
        const selects = game.players.map(nam => nam.playerSelect);
        const firstPlayerSelect =selects[0]
        const secondPlayerName=names[1];//input item
        const secondPlayerScore = scores[1]
        const secondPlyerSelect =selects[1];
        setItems(playerOne,firsPlayerName,firstPlayerSelect,firstPlayerScore)
        setItems(playerTwo,secondPlayerName,secondPlyerSelect,secondPlayerScore)
    }
    const updateScore = () => {
        playerResult.innerHTML=game.result
        let playerOne= document.getElementById("playerOne")//div id
        let playerTwo= document.getElementById("playerTwo")
        const scores = game.players.map(nam => nam.playerScore)
        const firstPlayerScore = scores[0]
        const secondPlayerScore = scores[1]
        setScore(playerOne,firstPlayerScore)
        setScore(playerTwo,secondPlayerScore)
    }
    //resuly checked  
    const checkResult=() =>{
        const playOne = document.getElementById("setAttributesOne").textContent
        const playTwo = document.getElementById("setAttributesTwo").textContent
        const playThere = document.getElementById("setAttributesThere").textContent
        const playFour = document.getElementById("setAttributesFour").textContent
        const playFive = document.getElementById("setAttributesFive").textContent
        const playSix = document.getElementById("setAttributesSix").textContent
        const playSeven = document.getElementById("setAttributesSeven").textContent
        const playEight = document.getElementById("setAttributesEight").textContent
        const playNine = document.getElementById("setAttributesNine").textContent
        // if somewhere x ===============================
        if((playOne ==="X")&&(((playTwo ==="X")&&(playThere ==="X"))||((playFour ==="X")&&(playSeven ==="X"))||((playFive ==="X")&&(playNine ==="X")))){
            game.play = false
            const res ="X"
            displayResult(res)
        }
        else if((playTwo ==="X")&&(((playOne ==="X")&&(playThere ==="X"))||((playFive ==="X")&&(playEight ==="X")))){
            game.play = false
            const res ="X"
            displayResult(res)
        }
        else if((playThere ==="X")&&(((playOne ==="X")&&(playTwo ==="X"))||((playSix ==="X")&&(playNine ==="X"))||((playFive ==="X")&&(playSeven ==="X")))){
            game.play = false
            const res ="X"
            displayResult(res)
        }
        else if((playFour ==="X")&&(((playOne ==="X")&&(playSeven ==="X"))||((playFive ==="X")&&(playSix ==="X")))){
            game.play = false
            const res ="X"
            displayResult(res)
        }
        else if((playFive ==="X")&&(((playOne ==="X")&&(playNine ==="X"))||((playFour ==="X")&&(playSix ==="X"))||((playThere ==="X")&&(playSeven ==="X"))||((playTwo ==="X")&&(playEight ==="X")))){
            game.play = false
            const res ="X"
            displayResult(res)
        }
        else if((playSix ==="X")&&(((playNine ==="X")&&(playThere ==="X"))||((playFour ==="X")&&(playFive ==="X")))){
            game.play = false
            const res ="X"
            displayResult(res)
        }
        else if((playSeven ==="X")&&(((playOne ==="X")&&(playFour ==="X"))||((playEight ==="X")&&(playNine ==="X")))){
            game.play = false
            const res ="X"
            displayResult(res)
        }
        else if((playEight ==="X")&&(((playTwo ==="X")&&(playFive ==="X"))||((playSeven ==="X")&&(playNine ==="X")))){
            game.play = false
            const res ="X"
            displayResult(res)
        }
        else if((playNine ==="X")&&(((playOne ==="X")&&(playFive ==="X"))||((playThere ==="X")&&(playSix ==="X"))||((playSeven ==="X")&&(playEight ==="X")))){
            game.play = false
            const res ="X"
            displayResult(res)

        }
        // if somewhere O=============================
        else if((playOne ==="O")&&(((playTwo ==="O")&&(playThere ==="O"))||((playFour ==="O")&&(playSeven ==="O"))||((playFive ==="O")&&(playNine ==="O")))){
            game.play = false
            const res ="O"
            displayResult(res)
        }
        else if((playTwo ==="O")&&(((playOne ==="O")&&(playThere ==="O"))||((playFive ==="O")&&(playEight ==="O")))){
            game.play = false
            const res ="O"
            displayResult(res)
        }
        else if((playThere ==="O")&&(((playOne ==="O")&&(playTwo ==="O"))||((playSix ==="O")&&(playNine ==="O"))||((playFive ==="O")&&(playSeven ==="O")))){
            game.play = false
            const res ="O"
            displayResult(res)
        }
        else if((playFour ==="O")&&(((playOne ==="O")&&(playSeven ==="O"))||((playFive ==="O")&&(playSix ==="O")))){
            game.play = false
            const res ="O"
            displayResult(res)
        }
        else if((playFive ==="O")&&(((playOne ==="O")&&(playNine ==="O"))||((playFour ==="O")&&(playSix ==="O"))||((playThere ==="O")&&(playSeven ==="O"))||((playTwo ==="O")&&(playEight ==="O")))){
            game.play = false
            const res ="O"
            displayResult(res)
        }
        else if((playSix ==="O")&&(((playNine ==="O")&&(playThere ==="O"))||((playFour ==="O")&&(playFive ==="O")))){
            game.play = false
            const res ="O"
            displayResult(res)
        }
        else if((playSeven ==="O")&&(((playOne ==="O")&&(playFour ==="O"))||((playEight ==="O")&&(playNine ==="O")))){
            game.play = false
            const res ="O"
            displayResult(res)
        }
        else if((playEight ==="O")&&(((playTwo ==="O")&&(playFive ==="O"))||((playSeven ==="O")&&(playNine ==="O")))){
            game.play = false
            const res ="O"
            displayResult(res)
        }
        else if((playNine ==="O")&&(((playOne ==="O")&&(playFive ==="O"))||((playThere ==="O")&&(playSix ==="O"))||((playSeven ==="O")&&(playEight ==="O")))){
            game.play = false
            const res ="O"
            displayResult(res)
        }
    }
    return {players,getLocal,result, play,update,updateScore,checkResult}
}

const game = Game()
 const playerResult = document.getElementById("playResult")

 window.addEventListener('DOMContentLoaded', (event) => {
    game.getLocal()
   game.update()
});
const Player = (name, score,select) =>{
    let playerName=name;
    let playerScore=score;
    let playerSelect=select
    const setPlayer= (name,score,select)=>{
        playerName = name;
        playerScore = score;
        playerSelect = select
    }
    return {playerName,playerScore,playerSelect, setPlayer}
}

//add listener for clik button for set X or O ---------------------------------

document.addEventListener("click",function(e){
    setTarget(e)
})

function setTarget(e) {// when click buton set targeet X or O ----------------------
    e.preventDefault()
    let orderID = document.getElementById("playOrder") //
    let order = orderID.textContent
    let column = e.target;
    if(!e.target.classList.contains("setAttributes")){
        return;
    } 
   if((game.play)&&(column.textContent ===".")){
        if(order ==="X"){
            column.innerHTML="X"
            orderID.innerHTML="O"
            game.checkResult()
              
        //============try area
        //===============================
        }
       if(order ==="O"){
            column.innerHTML="O"
            orderID.innerHTML="X"
            game.checkResult()
        }     
   }
}

// reault display ===================================
var modalDisplay = document.getElementById("myModalDisplay");
var span = document.getElementsByClassName("closeDisplay")[0];
span.onclick = function() {
    modalDisplay.style.display = "none";
  }
function displayResult(reslt) {
    game.players.map( item => {
        if(item.playerSelect ===reslt){
            item.playerScore++
            game.result=item.playerName
        }
    })
    const array =   game.players.map( item => item)
    const itemstore = JSON.stringify(array)
    localStorage.setItem(`players`,itemstore)
    playerResult.innerHTML=game.result
    const res = document.getElementById("winner")
    res.innerHTML ="Winner: " +  game.result
    modalDisplay.style.display = "block";
    game.getLocal()
    game.updateScore()
   setTimeout(() => {
       location.reload()
   }, 3000);
}
// restart play -----------------------------------------
 function restartButton() {
     document.getElementById("setAttributesOne").innerHTML="."
     document.getElementById("setAttributesTwo").innerHTML="."
     document.getElementById("setAttributesThere").innerHTML="."
     document.getElementById("setAttributesFour").innerHTML="."
     document.getElementById("setAttributesFive").innerHTML="."
     document.getElementById("setAttributesSix").innerHTML="."
     document.getElementById("setAttributesSeven").innerHTML="."
     document.getElementById("setAttributesSeven").innerHTML="."
     document.getElementById("setAttributesEight").innerHTML="."
     document.getElementById("setAttributesNine").innerHTML="."
     game.play = true
     playerResult.innerHTML=""
 }
 function insertFunction(){
    let playerOne= document.getElementById("playerOne")//div id
    let playerTwo= document.getElementById("playerTwo")
    const firsPlayerName=document.getElementById('firstPlayerName').value;//input item
    const secondPlayerName=document.getElementById('secondPlayerName').value;//input item
     const score =0
    const array =[]
    const item = setItems(playerOne,firsPlayerName,"O",score)
    array.push(item)
    const item2 = setItems(playerTwo,secondPlayerName,"X",score)
    array.push(item2)
    const itemstore = JSON.stringify(array)
    localStorage.setItem(`players`,itemstore)
    const game = Game()
    game.getLocal()
    modal.style.display ="none"
    location.reload()
 }

 function setItems(name,playerName,select,score){
    let playerOne= name
    const firsPlayerName=playerName
    let divOne= document.createElement("div")
    const pFirst = document.createElement("p")
    const pFirst1 = document.createElement("p")
    const pFirst2 = document.createElement("p")
    divOne.classList.add("playerOneArea")
    let divSecond= document.createElement("div")
    divSecond.classList.add("playerScore")
    const playerFirst = Player(firsPlayerName,score,select)
    playerFirst.setPlayer(playerFirst, score,select)
    pFirst.setAttribute("id",playerFirst.playerName)
    pFirst.textContent = playerFirst.playerName.toUpperCase()
    pFirst1.innerHTML=`${playerFirst.playerScore}`
    pFirst2.innerHTML =`${playerFirst.playerSelect}`
    divOne.appendChild(pFirst)
    divOne.appendChild(pFirst2)
    divSecond.appendChild(pFirst1)
    playerOne.appendChild(divOne)
    playerOne.appendChild(divSecond)
  return playerFirst
 }

 function setScore(name,score) {
    let playerOne= name
    let divOne= document.createElement("div")
    const pFirst = document.createElement("p")
    const pFirst1 = document.createElement("p")
    divOne.classList.add("playerOneArea")
    let divSecond= document.createElement("div")
    divSecond.classList.add("playerScore")
    pFirst1.innerHTML=`${score}`
    divOne.appendChild(pFirst)
    divSecond.appendChild(pFirst1)
    playerOne.appendChild(divOne)
    playerOne.appendChild(divSecond)
 }


 