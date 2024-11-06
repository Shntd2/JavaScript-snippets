let p = { 
  lastName: "Chickerson",
  firstName: "Bob" 
}
console.log("p (before modification of p2) =", p);

let p2 = {...p};

p2.city = "Washington";

console.log("p (after modification of p2) =", p);
console.log("p2 =", p2);
