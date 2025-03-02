array = [1,2,3];

console.log(truthychecker(array));
function truthychecker(array){
    let count = 0;
    for(let value of array)
        if (value)
            count++;
    return count;

}
