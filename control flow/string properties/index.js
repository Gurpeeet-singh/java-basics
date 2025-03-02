const person = {
    name: 'Joe',
    age: 30,
    surname: 'bob'
};


properties(person);

function properties(obj){
    for(let index in obj){
        if (typeof obj[index] === 'string')
            console.log(index, obj[index])
    }
}
