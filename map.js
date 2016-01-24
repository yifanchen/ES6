let animals = [
  {name: 'George',   species: 'rabbit'},
  {name: 'Hostage',  species: 'dog'},
  {name: 'Harold',   species: 'dog'},
  {name: 'Jing',     species: 'cat'},
  {name: 'Kevin',    species: 'fish'},
  {name: 'Taium',    species: 'hamster'}
];

// map does samething as in forloop, but less code
let names = animals.map(function(x){
  return x.name;
});

// this line of code does samething, even lesser, absolutely beautiful!
// => shorts out 'function', and implicitly returns to the statement after itself, gorgeous!
let names = animals.map((x) => x.name);

let names = [];
for(let i = 0; i < animals.length; i++){
  if(animals[i].species === 'dog');
     names.push(animals[i].name);
}

console.log(names);
