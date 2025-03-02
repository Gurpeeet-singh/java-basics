// if num divisvbbale by 3 you get fizz
// if divisble by 5 you get buzz
// if it divisible by 3 and 5 you get fizzbuzz
//if it isnt divisble itll return the number inputted
//if we pass a string or somethigs that not a number youll get not a number


const output = FizzBuzz()
console.log(output)

// function FizzBuzz(input) {
//     if (input % 3 === 0 && input % 5 === 0)
//         return 'FizzBuzz'
//     else if (input % 3 > 0 && input % 5 > 0)
//         return input
//     else if (input % 3 === 0) 
//         return 'Fizz';
//     else if (input % 5 === 0)
//         return 'Buzz'
//     else 
//         return 'Not a number'
// }

//better way to use it


function FizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number'; //or NaN
    else if (input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz'
    else if (input % 3 === 0) 
        return 'Fizz';
    else if (input % 5 === 0)
        return 'Buzz';
    return input;

}