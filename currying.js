// a curriable function is simpily a function takes all arguments by itself and then return to a new funciton that
// expects the next dependencies until all the dependencies are fulfilled.

let dragon = 
  name => 
    size =>
      elem =>
        name + ' is a '+
        size + ' dragon that breaths ' +
        elem + '!';

let output = dragon('Geroge')('little')('fire');
console.log(output);
