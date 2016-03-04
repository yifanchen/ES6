const Bacon = require('baconjs');
const stream = new Bacon.Bus();

stream
  .map(word => word.UpperCase());
  .onValue(word => console.log(word));

stream.push('cat');
stream.push('meal');
stream.push('trumpet');
