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


//arguments 
// function sum(a, b) {
//     return a + b
// }

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// youll get 3

// you dont need to have all parameters filled, if you dont youll get NaN in this scenario. you can also
// add as many parameters you want, it doesnt matter but the first 2 will get added up in this scenario

// how to make a flexable function 

function sum() {
    let total = 0;
    for(let value of arguments) {
        total =+ value;
    }
    return total;
}
// would return whatever them numbers are added up 
