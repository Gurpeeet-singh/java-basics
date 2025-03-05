//adding elements to the array 
const numbers = [3, 4];
//const means we cant resign remember

//you can use the dot notation to see all the properties and methods used in an array 

//we are llooking at 3 

//first one is push

numbers.push(5, 6)
console.log(numbers)
//add 5 and 6 to the end 
// how to add at the beginning 

numbers.unshift(1, 2)
console.log(numbers)
//will add 1 and 2 to the beginning 

//to add in the middle

numbers.splice(2, 0, 'a', 'b')
console.log(numbers)
//placed a and b after 1 and 3 in the array