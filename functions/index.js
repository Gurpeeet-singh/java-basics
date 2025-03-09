// Function Declarations vs Expressions
//funtion declaration
function walk() {
    console.log('walk');
} // dont really put on here 
 

// anonymous function expresssion 
let run = function() {
    console.log("wsg")
}; //; here 

//not anonymouse bc it has a name
let run1 = function walk() {
    console.log("wsg")
}; //; here 

//hoisting 
// for a function declaration you can call the function before it has been defined
// you cant for a function expression 

//hoisting defintion: the process of moving function declarations to the top of the file. This is done automatically done by the javascript engine upon executing the code