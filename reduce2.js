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
      quality: line[3]
    });
    return customers; 
  }, {})

console.log('output:', output);
