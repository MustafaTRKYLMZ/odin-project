
window.addEventListener('click', getInputValue);

function getInputValue(e){
 
let inputValue = document.getElementById('inputNumber').value//input value
console.log("input value",inputValue)




//let newGrid = document.createAttribute("class")

                
let marginCount=10;
for(i=0;i<5;i++){
    let gridArea = document.getElementById("newGrid")
var attrResult = document.createAttribute("class");
attrResult.value = "grid-container";
gridArea.style.margin=`${marginCount}px`//${marginCount}"px
marginCount =marginCount+10;
    gridArea.setAttributeNode(attrResult);
    console.log("i =>",i)
    console.log("Margin Count",marginCountva)
}

/*
let grid = document.createElement("div")
grid.className="grid-container"
gridArea.innerText="Hello"
gridArea.classList.add(grid)
console.log("gridArea",gridArea)
*/
}

function mouseOver() {
    document.getElementById("demo").style.color = "red";
    console.log("mouse over")
  }
  