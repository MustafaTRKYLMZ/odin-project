
const first = document.getElementById("firstResult");
const second = document.getElementById("secondResult");
const third = document.getElementById("thirdResult");
let sumAll ="";
let sumCount="";
let sumLast ="";

const handleClick=(id)=>{
  operate(id);
}
const setField = (sumLast,sumAll) => {
   first.innerHTML = sumAll;
   second.innerHTML=sumLast
   if(sumLast.length>50){
      newlast= sumLast.substring(sumLast.length-51,sumLast.length)
      newThird = sumLast.substring(sumLast.length-102,sumLast.length-51)
      second.innerHTML=newlast;
      third.innerHTML = newThird;
   }
}
const process=(array,process)=>{
   sum=0;
   if(array.length===1){
      sum = parseInt(array[0])
      return sum;
   }
   if(process ==="+"){
      sum = parseFloat(sumCount)+parseFloat(array[1])
   } else if(process === "-"){
      sum = parseFloat(sumCount)-parseFloat(array[1]);
   } else if(process === "x"){
      sum = parseFloat(sumCount)*parseFloat(array[1]);
   } else if(process === "/"){
      sum = parseFloat(sumCount)/parseFloat(array[1]);
   }  else if(process === "%"){
      sum = parseFloat(sumCount)%parseFloat(array[1]);
   } 
   return sum;
 };
const operatorProcess=(operator)=>{
   sumAll += operator;
   sumLast +=operator;
   setField(sumLast,sumAll)
    let arrayOne = sumAll.substring(0,sumAll.length);
    let array = arrayOne.split(operator)
    let newArrayOne = []
    for(i=0;i<array.length-1;i++){
       newArrayOne.push(array[i])
    }
    let final;
    for (i=0;i<newArrayOne.length;i++){
       final = doEqual(newArrayOne[i])
       if(final !== 0){
          newArrayOne[i]=final.toString();
       }
    }
    results = process(newArrayOne,operator);
    sumCount =results+operator;
   if(operator ==="="){
      sumAll = results
      first.innerHTML = sumAll;
   } else {
      sumAll = results+operator;
      first.innerHTML = sumAll;
   }
}
const operate= (id) => {
   let operator="";
   switch(id.value) {
      case "clear":
        first.innerHTML = "";
        second.innerHTML ="";
        sumAll=""
        sumLast="";
        sumCount=""
        break;
      case "plus":
         operator="+";
         operatorProcess(operator);
         break;
      case "minus":
         operator="-";
         operatorProcess(operator);
         break;
      case "multiply":
         operator="x";
         operatorProcess(operator);
         break;
      case 'divide':
         operator="/";
         operatorProcess(operator);
         break;
      case 'percent':
         operator="%";
         operatorProcess(operator);
            break;
      case "removeLastItem":
        sumAll=  sumAll.substring(0,sumAll.length-1)
        sumLast = sumLast.substring(0,sumLast.length-1)
        first.innerHTML = sumAll;
        if(Number.toString(sumCount)){
            sumCount=  sumCount.substring(0,sumCount.length-1)
        } else if(Number.isfloat(sumCount)){
           let newString = sumCount.toString();
           sumCount=  newString.substring(0,sumCount.length-1)
           sumCount =parseInt(sumCount);
        }
         break;
      case "equal":
         operator="=";
         operatorProcess(operator);
         break;
      default:
       sumAll += id.value;
       sumCount +=id.value;
       sumLast +=id.value;//parseInt
       first.innerHTML = sumAll;
    }
}
const doEqual =(sumArray) => {
   let result=0;
   let newArray=[];
   if(sumArray.includes("+")){
      newArray = sumArray.split("+")
      result = process(newArray,"+");
   } else if(sumArray.includes("-")){
      newArray = sumArray.split("-");
      result = process(newArray,"-");

   } else if(sumArray.includes("x")){
      newArray = sumArray.split("x");
      result = process(newArray,"x");

   } else if(sumArray.includes("/")){
      newArray = sumArray.split("/");
      result = process(newArray,"/");

   } else if(sumArray.includes("%")){
      newArray = sumArray.split("%");
      result = process(newArray,"%");

   }
   return result;
}
