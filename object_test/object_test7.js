
const fruits = {
    apple: 1,
    banana: 2,
    orange: 3
};

let text = "";

for (let [fruit, value] of Object.entries(fruits)) {
    console.log(`Checking ${fruit}`);
    if (fruits.hasOwnProperty(fruit)) {
        console.log(`Found ${value} pcs of ${fruit}\n`);
        text += `${fruit}: ${value}\n`;
    } else {
        console.log(`Did not find ${fruit}`);
    }
};
