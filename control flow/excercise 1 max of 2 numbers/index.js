//a function that takes to numbers and returns the maximum of the 2 
function max(num1, num2) {
    if (num1 > num2) 
        return num1 
    else if (num2 > num1)
        return num2
    else
        console.log("They are both the same")
}


let num1 = 10;
let num2 = 11;
console.log(max(num1, num2))