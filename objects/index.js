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
const circle = {
    radius: 1, 
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('wsg');
    }
}; //can store anything u want

circle.draw();