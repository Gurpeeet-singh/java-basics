
//address objects
//with street 
//city
//zipcode



const address = {
    street: 'a',
    city: 'b',
    zipcode: 'c'
};


function showAddress(address) {
    for(let key in address){
        console.log(key + ':', address[key]);
    };
};



showAddress(address)