const fibonacci = function(count) {
if(count===0) return 0;
let a=0;
let b=1;
for(i=1;i<count;i++){
    const temp = b;
    b = a+b;
    a=temp;
}
return b;
}

module.exports = fibonacci
