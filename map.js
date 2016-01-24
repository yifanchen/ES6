var animals = [
  {name: 'George',   species: 'rabbit'},
  {name: 'Hostage',  species: 'dog'},
  {name: 'Harold',   species: 'dog'},
  {name: 'Jing',     species: 'cat'},
  {name: 'Kevin',    species: 'fish'},
  {name: 'Taium',    species: 'hamster'}
];

// map does samething as in forloop, but less code
var names = animals.map(function(x){
  return x.name;
});

// this line of code does samething, even lesser, absolutely beautiful!
// => shorts out 'function', and implicitly returns to the statement after itself, gorgeous!
var names = animals.map((x) => x.name);

var names_array = [];
for(var i = 0; i < animals.length; i++){
  if(animals[i].species === 'dog');
     names_array.push(animals[i].name);
}

console.log(names);
console.log(names_array);
