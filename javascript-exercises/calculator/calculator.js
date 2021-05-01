function add (a,b) {
	if((a>=0&&b>=0)){
		return a+b;
	}
}

function subtract (a,b) {
	return a-b;
}

function sum (array) {
	let sum =0;
	if(array.length ===0){
		return 0;
	}
	for(i=0; i<array.length;i++){
		sum =sum+ array[i]
	}
	return sum;
}

function multiply (array) {
	let multiply =1;
	if(array.length ===0){
		return 0;
	}
	for(i=0; i<array.length;i++){
		multiply =multiply*array[i]
	}
	return multiply;
}

function power(array) {
	return array[0]**array[1]
}

function factorial(count) {
	
	if(count===0||count ===1){
		return 1;
	}
if(count>0){
	return count*factorial(count-1)
}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}