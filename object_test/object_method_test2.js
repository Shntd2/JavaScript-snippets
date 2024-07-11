const user = {
    name: 'Alice',
    age: 35,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    },
    increaseAge: function() {
        this.age++;
    }
};

user.greet();

user.increaseAge();
user.greet();
