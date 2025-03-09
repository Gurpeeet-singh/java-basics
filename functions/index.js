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

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// youll get 3

// you dont need to have all parameters filled, if you dont youll get NaN in this scenario. you can also
// add as many parameters you want, it doesnt matter but the first 2 will get added up in this scenario

// how to make a flexable function 

// function sum() {
//     let total = 0;
//     for(let value of arguments) {
//         total =+ value;
//     }
//     return total;
// }
// would return whatever them numbers are added up 


//rest operator 
// function sum(...args) { //this is the rest operator, spread operator is for arrays
//     console.log(args);
// } 
//would output an array on all the values 

// function sum(...args) {
//     return args.reduce((a, b) => a + b); 
// } //will return the same 


//so lets make a function that add a discout
function sum(discount, ...prices) { // rest parameter must be the last one in the function 

    const total = prices.reduce((a, b) => a + b); 
    return total * (1 - discount)
};


console.log(sum(0.1, 20, 30))

//default parameter

function interest(principle, rate, years) { // you can also do function interest(principle, rate = 3.5, years = 5) much cleaner
    rate =  rate || 3.5;
    years = years || 5; // so if theres no value for years or rates, itll use the default values here
    return principle * rate/100 * years
} // what if we want default parameters 