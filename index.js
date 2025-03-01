console.log('Hello World');

let name = 'Joe';
console.log(name);

// cannot be reserved keywords, such as let, if ETC (variable name)
// should be meaningful
// cannot start with a number
// cannot contain a space or a hyphen (-)
// example
// let Firstname (Camel notation in Java)

//case sensitive 

//declaring multiple variable 
//let firstname, surname;
//best one is declaring each variable on a single line.

//constanst
const InterestRate = 0.3
console.log(InterestRate)

//if you need to reassign use let 
// if you do not need to reassign use const


//data types 
//primitives (strings, numbers, booleans, undefined, none)
let surname = 'Joe'; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal (false as well)
let Firstname; // undefined (explicity say let Firstname = undefine; (not often))
let lastname  = null; //none  

//java is a dynamic language, meaning the data type can change 
//typeof {variable} in the console in order to see what data type it is
//float is still using number data type

//objects 
let person = {
    name: 'Joe',  //dont need the variables above it 
    age: 30
};  //object literal

//dot notation 
person.name = 'John';   
console.log(person.name) //Shorter so itll be used much more 

//bracket notation
person['name'] = 'Mary';
console.log(person.name) 

//bracket notation can be used for User controlled stuff 
let selection = 'name';
person[selection] = 'Gurpreet';
console.log(person.name) 


//arrays
let SelectedColors = ['red', 'blue']; //Array literal
SelectedColors[2] = 1; //adding something to the array
console.log(SelectedColors)
console.log(selection.length)
//array a data struture used to represent a list of items

//funtions 
function greet(surname){
    console.log('Hello World');
    console.log('Hello ' + surname)


    //body of the function
} //no need for a semicolon here

//calling a function 
greet(surname); //using a variable
greet('Mary'); // Not using a variable