const person = {
    firstName: 'John',
    lastName: 'Birkin',
    id: 5566
};

person.fullName = function() {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
};

console.log(person.fullName())
console.log(person)
