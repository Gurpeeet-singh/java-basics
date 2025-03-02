//conditional statements
// we have 2 
//if..else

//if hour is between 6am to 6pm; good morning 
//if it is between 12pm and 6pm: good evening 
//otherwise: goodevening

// if (condition) {
//      statement
// }

//else if (coniditon) {
//     statment
// }

//no limit......    

//if none of these conditions are met you can use


//else
// / statment
let hour = 17;

if ( hour >= 6 && hour <12) 
    console.log('good morning')

else if ( hour >=12 && hour <18) 
    console.log("good afternoon")

else 
    console.log("good evening")


//you dont need the {} 

//switch..case

//let role;
//switch (variable, this case role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
// }
//scanrios, seeing what permision someone has

let role = 'Guest';

switch (role) {
    case 'Guest':
        console.log('Guest user');
        break; //YOU NEED THIS HERE
    case 'Moderator':
        console.log("Moderator");
        break;
    case 'Admin':
        console.log("Admin User");
        break;
    default:
        console.log("Unknown role")
}

//this can be used in if

if (role === 'Guest') {
    console.log('Guest user using the if loop')
}
else {
    console.log("Unknown users")
}

//if is cleaner, but its up to you
//this is just the top one

//for...


//we want to displayy hello world 5 times
//we could do console.log('Hello World')x5 but no theres a better way

//we have many types of loops 
//for loops


// for (initialexpression; condition; increment expression) 
        //statement

for (let i = 0; i < 5; i++) {
    console.log("Hello World", i)
}

for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// for (let i = 5; i > 1; i--) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

    

// while loops 

let i = 0
//while (condition) in these types of loops the condition is evaluated before
while (i <= 5) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;    
}

//do..while loops

i = 0; //this is evaluated after    
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;      
} while(i <= 5);
// for..in loops
// for..of loops