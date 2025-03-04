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
function createricle(radius) {
    return {
       radius, //if they key and the paramter name are the same you can just do this
    //    draw: function() {
    //        console.log('wsg');
    //    } 
    //      instead of doind this for the function you can do it like below
        draw(){
            console.log('draw')
        }
   }; //can store anything u want   
}
const circle1 = createricle(1);
console.log(circle1);
const circle2 = createricle(2);
console.log(circle2);


//for factory functions you dont need the 'new'part
// you use 'this' for constructor functions, you dont for factory ones
// you use pascal notation for constructor

//constructor function
//point of it is to create or make something 
//camel notation: oneTwoThreeFour
//pascal notation: OneTwoThreeFour
//when using constructor functions use pascal notations 

function Circle(radius) {
    //instead of returning we do something else
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    };
}   

const circle3 = new Circle(1);
//when said new 
// you create an empty object
//set 'this.radius' to the radius 
//will return the new object to the new object   


//both patterns are real good for it, but the constructor functions is more familiar with people who code with java, C++, and C#