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