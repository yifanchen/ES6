var fs = require('fs');

var output = fs.readFileSync('data.txt', 'utf8')
  //trims down the extra space or line at the end of str
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    });
    return customers; 
  }, {});

console.log('output:', JSON.stringify(output, null, 2)); 

var orders2 = [
    ["Mark Johansson", "waffle iron", 80, 2],
    ["Mark Johansson", "blender", 200, 1],
    ["Mark Johansson", "knife", 10, 4],
    ["Nikita Smith", "waffle iron", 80, 1],
    ["Nikita Smith", "knife", 10, 2],
    ["Nikita Smith", "pot", 20, 3]
];

var output = orders2.reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    });
    return customers;
}, {});
console.log("orders2 output:", JSON.stringify(output, null, 2));
