//landscape or potrait checker 


// function isLandscape(width, height) {
//     if (width > height)
//         return true
//     else
//         return false 
// }

//better way of the writing the same thing 


function isLandscape(width, height) {
    return (width > height);
}

let width = 500;
let height = 200;

console.log(isLandscape(width, height))