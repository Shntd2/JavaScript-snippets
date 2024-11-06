function add_10_first_integers(start, counter) {
  let total = 0;
  for (let i = start; i <= counter; i++){ 
    total += i;
  }
    return total;
}

let starter_num = 2;
let counter_limit = 10;
let total = add_10_first_integers(starter_num, counter_limit);
console.log("Total = " + total);

