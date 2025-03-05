//make a factory and constructor function

function address(street, city, name) {
        street,
        city,
        name
}

function newaddress(street, city, name) {
    this.street = street;
    this.city = city;
    this.name = name;
}
//factory 
console.log(address('1', '2', '3'))

//constructor
let y = new newaddress('a', 'b', 'c')
console.log(y)