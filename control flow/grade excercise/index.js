

//work out average grade 
//1 -59: F
//60-69: D
//70-79:C
//80 - 89: B
//90-100: A

const marks = [80,90,100];


console.log(calculateGrades(marks));

function calculateGrades(marks) {
    let count = 0;
    let total = 0;
    for(let key of marks){
        count++
        total = key + total
        if(key <=59 ){
            console.log('F')
        }
        else if (key >=60 && key <=69){
            console.log('D')
        }
        else if (key >=70 && key <=79){
            console.log('C')
        }
        else if (key >=80 && key <= 89){
            console.log('B')
        }
        else if (key >= 90 && key <= 100){
            console.log('A')
        }
        else{
            console.log('Invalid')
        }
    }
    let average = total/count;
    return 'Average is: ' + average;

        
}