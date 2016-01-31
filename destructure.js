makeSound({
  weight: 23,
  sound: 'woof'
});

function makeSound(options){
  //this line is kinda like a if condition, if options.species doesn't exsit, use 'animals' instead.
  options.species = options.species || 'animals';
  var species = options.species;
  species = species || 'animals';
  var sound = options.sound;
  console.log('The ' + species + ' says '  + sound + '!');  	
}
  	
// in this example of es6, function makeSound directly takes object literal from given object and applied it to itself. Improved readabality and maintainablity.
function makeSound({ species = 'anlmal', sound }) {
  console.log('The ' + speceis + ' says ' + sound + '!');	
}
