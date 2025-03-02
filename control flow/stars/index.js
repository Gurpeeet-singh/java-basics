
function stars(row){
    for(let i = 1; i <= row; i++){
        let pattern = '';
        for (let x = 0; x < i; x++)
            pattern += '*';
        console.log(pattern)


    }
}





stars(100)
