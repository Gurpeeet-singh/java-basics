const numbers = [1, 2, 3, 4];

console.log(check(numbers, 4));

function check(list, finding) {
    for(let key of list) {
        if(key === finding) {
            console.log('Found');
        }
        else {
            console.log('Cant found')
        }
    };
    
};



