// what is prototype in javascript? In my understanding, prototype is the outer catgorey contains the inner object. e.x: food is prototype of burger and fries. And yes, it sounds like classes, but prototype and class are different.

// const food object, starts with init function and eat function, type passed as parmeter form init funciton FOOD is assigning as object literal.
// when declare things in ES6, can use both const and let, const is immutable, vice versa is let.
const FOOD = {
  init: function(type){
    this.type = type;
  },
  eat:function(){
    console.log('you ate the ' + this.type + '!');
  }
};

//FOOD.init('waffle');
//FOOD.eat();

// here for these 2 lines, object.create waffe and carror.They are 2 new objects, and they are assigned FOOD as their prototypes.
const waffe = Object.create(FOOD);
const carrot = Object.create(FOOD);

FOOD.eat = function(){
  console.log('YOU TOTALLY EAT THE ' + this.type.toUpperCase());
}

waffe.init('waffe');
waffe.eat();

carrot.init('carrot');
carrot.eat();

// here are 2 expamles of using isPrototypeOf to check Prototype type.
console.log('waffee is food', FOOD.isPrototypeOf(waffe));
console.log('carror is food', FOOD.isPrototypeOf(123123));
//FOOD.isPrototypeOf(waffe);
//FOOD.isPrototypeOf(123123);

