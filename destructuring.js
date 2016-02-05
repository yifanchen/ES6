// destructuring
var foo = {
  bar: 1,
  baz: 2
}

var { bar, baz } = foo;

var tenses = ['me', 'you', 'her'];
var [firstperson, secondperson]  = tenses;

Promose.all([promise1, promise2]).then(function(results1, results2){
  var results1 = results;   
})

var name = 'George';
var age = 27;
some.method({ name, age });
{
  name: name,
  age: age
}

//template strings
var name = 'Georage';
var thing = 'party';

// keyword backquote ``
var likeToDo = `hi, my name is ${name}, and I like to ${ting}!`;


//block socping
//you want to use block socoping where is condition, like if(), else(), and loops. Keyword == let
var a = 1;
function (){
  var b = 2;   	
}
console.log(b); //2

//arrow function 
var foo = function(a, b){
  return a + b;
}
var foo = (a, b) => {
  return a + b;
}

do.something(function(a, b){
  return a + b;
})
do.something((a, b) => a + b);
[0,1,2].map(val => val++); //[1,2,3]


// modules
var myModule = require('myModule');
import myModule from 'myModule';

// another file
import { each, omit } from "loadsh";

// async functions
async function(){
  var friends = await $.get('http://somesite.com/frineds');
  console.log(friends);
}
