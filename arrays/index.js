//adding elements to the array 
const numbers = [3, 4];
//const means we cant resign remember

//you can use the dot notation to see all the properties and methods used in an array 

//we are llooking at 3 

//first one is push

numbers.push(5, 6)
// console.log(numbers)
//add 5 and 6 to the end 
// how to add at the beginning 

numbers.unshift(1, 2)
// console.log(numbers)
//will add 1 and 2 to the beginning 

//to add in the middle

numbers.splice(2, 0, 'a', 'b', 1)
// console.log(numbers)
//placed a and b after 1 and 3 in the array


//finding elements in the array


//how to find elements that are primitives 
//we can use indexof
console.log(numbers.indexOf('h'));
//if its -1 that means its not there like the one ive written above

console.log(numbers.indexOf(1));
//this will be 0 because its based of the index and 1 is 0 in the index list 
//arrays start from 0
//has to be the same data type as well

//we can use this as well
console.log(numbers.lastIndexOf(1));
//itll show the last position 1, so if theres muliple.

// you use this as well
console.log(numbers.includes(1));
//will return true if found or itll return false

// all of these have a second parameter which is optional which is the starting index, this is self explanatory 




