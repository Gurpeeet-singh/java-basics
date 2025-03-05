
function newaddress(street, city, name) {
    this.street = street;
    this.city = city;
    this.name = name;
};


let address1 =  new newaddress('a', 'b', 'c');
let address2 =  new newaddress('a', 'b', 'c');

function isEqual(address1, address2) {
    for(let key in address1) {
        if(address1[key] === address2[key]){
            console.log("true")
        }
        else {
            console.log('false')
        }
    }
}

isEqual(address1, address2)