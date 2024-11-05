const map = new Map();

map.set("first", 1);
map.set("second", 2);
map.set("third", 3);

for (const [key, value] of map) {
  console.log(key, value);
}
