const items = ["apple", "banana", "apple", "orange"];
const counts = new Map();
for (const item of items) {
  counts.set(item, (counts.get(item) || 0) + 1);
}

console.log(counts);
