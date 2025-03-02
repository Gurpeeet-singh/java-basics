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

