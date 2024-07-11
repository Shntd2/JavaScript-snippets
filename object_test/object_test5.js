const person = {
    name: "John",
    age: 30,
    city: "New York"
};

let text = "";
for (let x in person) {
    if (person.hasOwnProperty(x)) {
    text += `${x}: ${person[x]}\n`;
    }
};

console.log(text)
