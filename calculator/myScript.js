// All process (+ - * / %) is working effectively. 
//You can contionue other functions

//ASSİGNMENTS
//1- you should Result Area2 ad Result Area1
// 2- you should built CC process
// 3- sumAll is continue out of the result Area3. You should fix them. 

const first = document.getElementById("firstResult");
const equal = document.getElementById("equal").value;
let sumAll ="";
let sumCount="";

const handleClick=(id)=>{
   console.log("SumCount",sumCount)
switch(id.value) {
   case "clear":
     document.getElementById("firstResult").innerHTML = "";
     sumAll=""
     sumCount=""
     break;
   case "plus":
     sumAll += "+";
     sumCount +="+";
     document.getElementById("firstResult").innerHTML = sumAll;
  
     break;
   case "minus":
      sumAll += "-";
      sumCount +="-";
      document.getElementById("firstResult").innerHTML = sumAll;
      break;
   case "multiply":
      sumAll += "*";
     sumCount +="*";
     document.getElementById("firstResult").innerHTML = sumAll;
      break;
   case 'divide':
      sumAll += "/";
     sumCount +="/";
     document.getElementById("firstResult").innerHTML = sumAll;
      break;
      case 'percent':
         sumAll += "%";
        sumCount +="%";
        document.getElementById("firstResult").innerHTML = sumAll;
         break;
   case "equal":
      let result=0;
      let newArray=[];
      if(sumCount.includes("+")){
         newArray = sumCount.split("+")
         result = process(newArray,"+");
      } else if(sumCount.includes("-")){
         newArray = sumCount.split("-");
         result = process(newArray,"-");

      } else if(sumCount.includes("*")){
         newArray = sumCount.split("*");
         result = process(newArray,"*");

      } else if(sumCount.includes("/")){
         newArray = sumCount.split("/");
         result = process(newArray,"/");

      } else if(sumCount.includes("%")){
         newArray = sumCount.split("%");
         result = process(newArray,"%");

      }
    
    console.log("Result",result)
    sumAll +="="+result;
    
   document.getElementById("firstResult").innerHTML = sumAll;
   sumCount=result;
   console.log("sumCount",sumCount)
   console.log("sumAll",sumAll)
      break;
   

  
   default:
     // code block
    sumAll += id.value;
    sumCount +=id.value;//parseInt
    document.getElementById("firstResult").innerHTML = sumAll;
 }

 
   
  
}

const process=(array,process)=>{
   console.log("in process",array)//array =["9","1"]
sum=0;
//for(i=0;i<array.length;i++){
   if(process ==="+"){
        sum = parseFloat(array[0])+parseFloat(array[1])
   } else if(process === "-"){
      sum = parseFloat(array[0])-parseFloat(array[1]);
   } else if(process === "*"){
      sum = parseFloat(array[0])*parseFloat(array[1]);
   } else if(process === "/"){
      sum = parseFloat(array[0])/parseFloat(array[1]);
   }  else if(process === "%"){
    
      sum = parseFloat(array[0])%parseFloat(array[1]);
   } 
//};
return sum;
 };
