//sum function is working effectively.
//I tried ony sum function and equal function. 
//You can contionue other functions

const buttonClick = document.getElementById("7").value;
const buttonPlus = document.getElementById("plus").value;
const first = document.getElementById("firstResult");
const equal = document.getElementById("equal").value;
let sumAll ="";
let sumCount=0;
console.log("button value",buttonClick.value)
console.log(first)
const handleClick=()=>{
   console.log("Hi")
   sumAll += buttonClick;
   sumCount +=parseInt(buttonClick);
   document.getElementById("firstResult").innerHTML = sumAll;
  
   console.log(buttonClick.value)
  
}
const handleClickPlus=()=>{
    console.log("Hi")
    sumAll +=buttonPlus;
    document.getElementById("firstResult").innerHTML = sumAll;
   
    console.log(buttonClick.value)
   
 }

 const handleClickEqual = ()=>{
    console.log("Equal")
    sumAll +=equal+sumCount;
    
    document.getElementById("firstResult").innerHTML = sumAll;
   
    console.log(buttonClick.value)
   console.log("sumCount",sumCount)
 }
 

 const sum=()=>{
  /* //  const sumX = sumCount.split('');
  //  console.log("sumX",sumX)
   // let newArray =[]
  //  for(i=0;i<sumX.length;i++){
        let number = parseInt(sumX[i]);
            if(number!=="NaN"){
                 newArray[i]=number;
            }
        
    }
     const sum = newArray.reduce((a,b) => a+b);
     console.log("New Array",newArray)
     console.log("Sum",sum)
     return sum;
*/
 }
