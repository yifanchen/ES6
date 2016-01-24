var animals = [
  {name: 'George',   species: 'rabbit'},
  {name: 'Hostage',  species: 'dog'},
  {name: 'Harold',   species: 'dog'},
  {name: 'Jing',     species: 'cat'},
  {name: 'Kevin',    species: 'fish'},
  {name: 'Taium',    species: 'hamster'}
];

var cat = animals.filter((x) => x.species === 'cat');

var names = [];
for(var i = 0; i < animals.length; i++){
  if(animals[i].species === 'cat');
     names.push(animals[i].name);
}

console.log(names);
