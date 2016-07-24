// example of call back hell
setTimeout(function () {
  console.log('one');
  setTimeout(function () {
    console.log('two');
    setTimeout(function () {
      console.log('three');
    }, 1000);
  }, 1000);
}, 1000);


// as same as previous function, it just dosn't look like a call-back hell,
// but is a call back hell.
function one(cb) {
  console.log('one');	
  setTimeout(cb, 1000);
}

function two(cb) {
  console.log('two');
  setTimeout(cb, 1000);
}

function three(cb) {
  console.log('three');
  //setTimeout(cb, 1000);
}

one(function () {
  two(three);
})

function tt(callback) {
  console.log('here is the call back');	
  setTimeout(callback, 2000);
}
tt();
