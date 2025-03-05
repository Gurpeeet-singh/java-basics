//basics 
//instead of doing 
//let radius = 1;
//let x = 2;
//let y = 1;
//you can use an object


// const circle = {
//     radius: 1, 
//     x: 1, 
//     y: 1,

// }
// you can have a obj in a obj
//obj orientated style programming (OOP)
// const circle = {
//     radius: 1, 
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('wsg');
//     }
// }; //can store anything u want

//how to create a factory function
// function createricle(radius, location) {
//      return {
//         radius: radius, 
//         location: location, //see this way is a lot easier 
//         isVisible: true,
//         draw: function() {
//             console.log('wsg');
//         }
//     }; //can store anything u want   
// }
// function createricle(radius) {
//     return {
//        radius, //if they key and the paramter name are the same you can just do this
//     //    draw: function() {
//     //        console.log('wsg');
//     //    } 
//     //      instead of doind this for the function you can do it like below
//         draw(){
//             console.log('draw')
//         }
//    }; //can store anything u want   
// }
// const circle1 = createricle(1);
// console.log(circle1);
// const circle2 = createricle(2);
// console.log(circle2);


//for factory functions you dont need the 'new'part
// you use 'this' for constructor functions, you dont for factory ones
// you use pascal notation for constructor

//constructor function
//point of it is to create or make something 
//camel notation: oneTwoThreeFour
//pascal notation: OneTwoThreeFour
//when using constructor functions use pascal notations 

// function Circle(radius) {
//     //instead of returning we do something else
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     };
// }   

// const circle3 = new Circle(1);
//when said new 
// you create an empty object
//set 'this.radius' to the radius 
//will return the new object to the new object   


//both patterns are real good for it, but the constructor functions is more familiar with people who code with java, C++, and C#


//functions are dynamic in javascript
//this means you can add new items to the object and also delete items within the object



const circle = {
    radius: 1
};
//to add you could do this
circle.color = 'yellow';
circle.draw = function() {
    console.log('draw')
}

//to delete you could do 
delete circle.color;
delete circle.draw; 


console.log(circle);




//functions are also objects 

// function newcircle(radius) {
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw') 
//     }
// }
//when you when newcircle.  you get all the options like you would on a constructor or a factory function
// const another = new newcircle(1) //dont really need the new
//this can be written like this as well
// newcircle.call({}, 1) //this calls the function
// //another method
// newcircle.apply({}, 1)
//in apply instead of passing them explicity like in the call one (1, 2, 3, 4 ....)
// you could put em in an array
// [1, 2, 3, 4]
//can be useful when you have an array somewhere and want to pass it through using the apply


//in java script we have 2 types
//value types (also can be called primitives)
//in value types we have these types
//number
//string
//boolean
//symbol
//uindefined
//null

let x = 10;  //defining a primitive 
let y = x;


x = 20;
// go into console and write x which will = 20 and y which will = 10
//this shows that they are compeletly independant   

//reference types
//in here we have 
//objects 
//arrays
//funtions 


let i = { value: 10};
let z = i;


i.value = 20;

// here when you type i into the console itll be 20, same with z. this shows that they are dependant 


//primitives are copied by their value 
//objects are copied by their reference 


//emunarating properties of an object 
// how to go throw an object
const newcircle = {
    radius: 1, 
    draw() {
        console.log('draw')
    }
}

for(key in newcircle) {
//    console.log(key) //this will print the name of the variables, not actually whats in it
//    console.log(newcircle[key]) // this will print out the info inside of the variable  
//better way of writing the above 2 ones together is
    console.log(key, newcircle[key]);

}
for(let key of Object.keys(newcircle)) //outputs the variable name
    console.log(key);

for(let entry of Object.entries(newcircle)) //outputs both as an array 
    console.log(entry);

if('radius' in newcircle) console.log('yes');   //looking for 'radius in new circle

//cloning an object

// const another = {};

// for(let key in newcircle){
//     another[key] = newcircle[key]; //THE PROCESS of copying the data from newcircle into another
// }
//this way that we have done is a little bit old. In modern a Javascript there is a better way to do it 

// const another = Object.assign({}, circle) // this is the better way, thje object can start with its own varibales inside 
const another = Object.assign({
    color: 'yellow'
}, circle)
console.log(another) //checking if it has been copied over and it has
 //theres an even better way


const another1 = {...circle }; // the ... means thats it taking all of the properties of circle and copying it into here
console.log(another1)


//unlike low level programming languages such as C and c++ you have to manually reallocate and deallocate data
// in java script you dont 
// we have something called a garabage collecter and its their job to find all variables and constants that are not being used anymore and then deallocate the data 

//javascript has many inbuilt objects. the main one is math 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math 
//click the link, this is the best place when your looking for all references   


//we have 2 types of strings 
//string primitive
const message = 'hello world'; 
//string object 
const message1 = new String('hi');

//properties and methods for strings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//when creating a new line you need to use \n, however thatll look very noisy in the code, this is where
//template literals come into clutch 

// we know about these literals 
//object literals {}
//boolean true, false
//string ''
//template literals ``
const message3 = `Hello 
world`

//you can use ${} using the template literals to assing variables

//last main object is date
const date = new Date()
//look here
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
