let dog = {
  sound: 'woof',
  talk: function() {
    console.log(this.sound);
  }
}

//dog.talk(); // 'woof'

let talkFn = dog.talk; // undefined without binding becuase javascript doesn't know what this refers to in the current context.
  // and it gets confused with funcitonal programming and oop.
let bb = talkFn.bind(dog);
bb();

// reality problem

let button = document.querySelector('.btn');
button.addEventListener('click', dog.talk.bind(dog));

