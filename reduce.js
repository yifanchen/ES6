let orders = [
  {amount: 250},
  {amount: 100},
  {amount: 400},
  {amount: 350}
];

// set the first iteration starts 0, it iterates the length of the array and adds iterations all together.
let total = orders.reduce(function(sum, x){
  return sum + x.amount;
}, 0);

let total = orders.reduce(sum, x) => sum + x.amount, 0);

let totalAmount = 0;
for (let i = 0; i < orders.length; i++){
  totalAmount += orders[i].amount;
}

console.log(total);
console.log(totalAmount);
