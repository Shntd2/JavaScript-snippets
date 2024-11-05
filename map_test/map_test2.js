const user1 = { name: "Alice" };
const user2 = { name: "Bob" };
const metadata = new Map();

metadata.set(user1, { lastLogin: new Date(), role: "admin" });
metadata.set(user2, { lastLogin: new Date(), role: "user" });

console.log(metadata.get(user1));
console.log(metadata.get(user2));
