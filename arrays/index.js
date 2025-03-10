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


//sorting arrays 
numbers = [2, 1, 3];
numbers.sort(); // will sort the array 


numbers.reverse(); // will reverse the order so itll be 3, 2, 1

// how to sort with objects 

const code = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Javascript'},

]

code.sort(function(a, b) {
    // if a is less than be we should return -1
    // if a is greater than be we should return 1 
    // if a is equal to b than we should return 0
    // you have to make sure both of them are the same case as it may not work
    const nameA =  a.name.toUpperCase(); // should either be toUpperCase or toLowerCase
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});



//testing elements in an array 
numbers = [1, 2, 3];

numbers.every(function(value) {
    return value >= 0;
});

// you can use some as well, and that checks if there at least 1 true

numbers.some(function(value) {
    return value >= 0;
});


//how to filter through and array 
numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function(value){
    return value >= 0;
});

console.log(filtered); // will return all values in an array
// output will be [1, 2, 3]

//mapping an array 
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items)


//reducing an array
numbers = [1, 2, 3, 4]; //how to get the sum of all of them. 
let sum = 0;

for(let n of numbers);
    sum += n;
console.log(sum);

//this is one way of wrtiing that code, but we can also reduce, in order to do the same thing

// numbers.reduce((//accumulator, //current value ) => {
// });

const sum1 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum1) // does the same thing but its cleaner
