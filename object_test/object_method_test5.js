const person = {
    firstName: 'John',
    lastName: 'Birkin',
    id: 5566,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName())
