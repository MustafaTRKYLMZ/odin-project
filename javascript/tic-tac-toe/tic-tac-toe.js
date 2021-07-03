const Game = () =>{
let players = []
 let result =0
 const getLocal = () => {
    
        const storageItem =  JSON.parse(localStorage.getItem("players"))
        console.log("store items", storageItem)
       // players.push(storageItem)
        storageItem.forEach(element => {
            players.push(element)
        })


    }
    console.log("players",players)
    

    return {players,getLocal,result}
}

const game = Game()
 const playerOne = document.getElementById("playResult")
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
   
   
    
    game.getLocal()
    console.log("local",game)
  playerOne.innerHTML=game.result
    
});

const Player = (name, score) =>{
    let playerName=name;
    let playerScore=0;
    

    const setPlayer= (name,score)=>{
        playerName = name;
        playerScore = score;
       
    }
    const increaseScore = () =>{
        playerScore++
    }
   

    return {playerName,playerScore, setPlayer, increaseScore}
}


//add listener for clik button for set X or O ---------------------------------

document.addEventListener("click",function(e){
setTarget(e)
})

function setTarget(e) {// when click buton set targeet X or O ----------------------
    const player = Player()
    e.preventDefault()
    let orderID = document.getElementById("playOrder") //
    let order = orderID.textContent
    let column = e.target;
    if(!e.target.classList.contains("setAttributes")){
        return;
    } 
    if(column.textContent ==="."){
        if(order ==="X"){
                column.innerHTML="X"
                orderID.innerHTML="O"
                //============try area
                game.result++
                console.log(player.playerScore, game.result)
                playerOne.innerHTML=game.result
                //===============================
            }
            if(order ==="O"){
                column.innerHTML="O"
                orderID.innerHTML="X"
            }
    }
    
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
 }
 function insertFunction(){
    let playerOne= document.getElementById("playerOne")//div id
    let playerTwo= document.getElementById("playerTwo")
    const firsPlayerName=document.getElementById('firstPlayerName').value;//input item
    const secondPlayerName=document.getElementById('secondPlayerName').value;//input item
    const array =[]
    const item = setItems(playerOne,firsPlayerName)
    array.push(item)
    const item2 = setItems(playerTwo,secondPlayerName)
    array.push(item2)


    const itemstore = JSON.stringify(array)
    localStorage.setItem(`players`,itemstore)

    getStorage()
    modal.style.display ="none"
 }

 function setItems(name,value){
   
  let playerOne= name
  const firsPlayerName=value
   let divOne= document.createElement("div")
  const pFirst = document.createElement("p")
  
  const pFirst1 = document.createElement("p")
  divOne.classList.add("playerOneArea")
  const score =0
  const playerFirst = Player(firsPlayerName,score)
  playerFirst.setPlayer(playerFirst, score)
pFirst.setAttribute("id",playerFirst.playerName)
  pFirst.textContent = playerFirst.playerName.toUpperCase()
  pFirst1.innerHTML=`${playerFirst.playerScore}`

  divOne.appendChild(pFirst)
  divOne.appendChild(pFirst1)
  playerOne.appendChild(divOne)
 
  return playerFirst
  
 }
 function getStorage() {
    const storageItem = localStorage.getItem("players")
         console.log("storage item", storageItem)
 }
