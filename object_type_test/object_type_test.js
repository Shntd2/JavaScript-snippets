function Person (firstName, lastName, age, eyeColor) {  
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}

let people = ''

const johnPipper = new Person ('John', 'Pipper', 50, 'blue');
const annaBriosch = new Person ('Anna', 'Briosch', 35, 'brown');

const persons = [johnPipper, annaBriosch]

for (let person of persons) {
    for (let [key, value] of Object.entries(person)) {
        people += `${key}: ${value}\n`;
    }
    people += '\n'
} 

console.log(people)
