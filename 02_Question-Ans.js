// Explain:-
// In JavaScript the comma operator is used to combine multiple expressions into a single expression. It evaluates 
// each of these expressions from left to right and returns the value of the last expression. The comma operator is 
// often used in situations where multiple expressions need to be executed sequentially.


// code:-
let a = 2, b = 3;
let result = (a - b, b++, a * b);

console.log(result); 
console.log(a);      
console.log(b);     
