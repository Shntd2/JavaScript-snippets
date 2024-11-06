const numbers = [1, 2, 3, 4, 5];
console.log("Original numbers array:", numbers);

console.log("Squares of each number:");
numbers.forEach(function(number) {
  const square = number ** 2;
  console.log(`The square of ${number}: ${square}`);
});
