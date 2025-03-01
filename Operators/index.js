//different types of operatos
//arithmetic
let x = 10;
let y = 9;
// console.log(x + y); //addition
// console.log(x - y); //subtraction
// console.log(x * y); //Multiplication
// console.log(x / y); //division
// console.log(x % y); //remainder (MOD in python)
// console.log(x ** y); // exponential (x to the power of y)
// //increment
// console.log(++x); //icrement first then itll show
// console.log(x++); //shows the intial value and then does the icrement
// //decrement
// console.log(--x); //decrement first then itll show
// console.log(x--); //decrement the intial value and then does the icrement

//assignment 

// x++; = to x = x + 1
// x = x + 5 is equal to x +=5
// all of the arithemitc has this combination such as, (*=, /=, ETC)

//comparison
//relational
console.log(x > 0);
console.log(x >= 0);
console.log(x <= 0);

//equality
console.log(x === 0); //if it equal to it
console.log(x !== 0); //check if it isnt equal 

//equality 2
//strict equality (has to be the same data type and value)
console.log(1 === 1); //this will be true 
console.log('1' === 1); //this will be false

//lose equality looks at value not data type 
console.log(1 == 1); //this will be true 
console.log('1' == 1); //this will be true 
//most of the time you should be using the strict equality as its more precise and accuarate 

//ternary operators

//scenario: if they have more than 100 points they are a 'gold' customer, if not they are a 'silver' customer.
let points = 90;
let type = points > 100 ? 'gold': 'silver'; //this will be true as points is 110, //statemnts saying if points is higher than 100 assing gold to the variable type else, assgin silver
console.log(type)

//logical


//logical AND (&&)
//returns true if both operands are true 
console.log(true && true) //will be true 
console.log(false && true) //will be false

//real life example
let highincome = true;
let goodcreditscore = true;
let eligibleforloan = highincome && goodcreditscore
console.log(eligibleforloan)

//logical OR (||)
//returns if one is true 

console.log(false && true) //will be true 
console.log(false && false) //will be false

let highincome1 = true;
let goodcreditscore1 = false;
let eligibleforloan1 = highincome1 || goodcreditscore1
console.log(eligibleforloan1)
// NOT (!) 
// opposite
let applicationrefused = !eligibleforloan; 
console.log(applicationrefused)
//bitwise