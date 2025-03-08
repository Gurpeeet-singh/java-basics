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


// how to look for objects in arrays 
const courses = [
  {id: 1, name: 'BIOLOGY'},
  {id: 2, name: 'MATHS'},
  {id: 3, name: 'SCIENCE'}
]

console.log(courses.include,{id: 1, name: 'BIOLOGY'}); //this will be false because it they are difference reference points so and they are in different memory locations 
//this is the right way


const course = courses.find(function() {
  return course.name === 'BIOLOGY';
  });

console.log(course)
// if it finds the data we are looking for itll print it, if it cant find it itll print undefinded 
// you can change the .find, to .findIndex, tell you the index of where the data is 

//arrow functions 

// const course1 = courses.find(course1 => {
//   return course.name === 'BIOLOGY';
//   });
// you can make this code even shorter if your function is only 1 line 
const course1 = courses.find(course => course.name === 'BIOLOGY')


//removing elements

nums = [1, 2, 3, 4];


//pop method (removed the last one in the list)
nums.pop();
//removes 4 from the list 

// shift method, removes the first one in the list 

nums.shift();
// will remove 1 from the list 

//splice to remove from the middle 
numbers.splice(2, 2)
// first parameter is from what index, second is how many values do you want to delete 

// how to empty an array 

let amount = [1, 2, 3, 4, 5];
amount  = [];

//another way 
amount.length = 0;

//another another way
amount.splice(0, numbers.length)

//also another way 

while (amount.length > 0) {
    amount.pop();
};

//reccomended to use the second one but its up to you


//how to combine and slice an array 

//combining
const first = [1, 2, 3];
const second = [4, 5, 6];
 
const combined = first.concat(second); //concatenates these 2 together 
console.log(combined); //this prints out first and second arrays into one array 

// to slice you can use the slice command 
const slice = combined.slice(2, 4); // you can exlclude the second index and that means that itll do it from the first index until the array is finished 
console.log(slice); //will print out 3 and 4 in a different table 

// you can use the spreate operater as well 

const combined1 = [...first, ...second]; // you can easily add an extra element
// const combined1 = [...first, 'a' ...second, 'b'];
console.log(combined1) // will print [1, 2, 3, 4, 5, 6]


//iterating an array 
amount = [1, 2, 3, 4, 5];
//one way using a for loop
for (let index of numbers) {
    console.log(index) //will print out 1, 2, 3, 4, 5, 6
}

//another way 
amount.forEach(function(number) {
    console.log(number);
});


//that code above can be simplified 
amount.forEach(number => console.log(number));
// you would need () around number if there was more than one paramter


//joining arrays 
numbers = [1, 2, 3]
const joined = numbers.join(',')
console.log(joined) //this will print out 1, 2, 3
