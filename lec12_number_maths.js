// Number
console.log(Number);
const score=400;
console.log(score);
const balance=new Number(100000.9346)
console.log(balance)
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));//check only 3rd decimal digit and increase if >=5//returns a string
console.log(balance.toPrecision(6))//returns a string

console.log(balance.toLocaleString('en-IN'))
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
//MATHS
console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(46.501))//give ans to nearest integer
console.log(Math.floor(3.9))
console.log(Math.ceil(5.35))
//Maths class random method
 console.log(Math.random());
 console.log((Math.random()*10)+1)
 console.log(Math.floor((Math.random()*10)+1))
 const max=40
 const min=30
 console.log(Math.floor(Math.random()*(max-min+1))+min)