// In javascript, funcitons are not just functions, they are also closures. Meaning, the functions body have accesses to variables which are defined outside of the function itself.

// In this exmaple, function greetMe is a function, it is also a closure. Meaning, function greetMe has access to reach variable me outside of the function.
// javascript supports closures.
var me = 'George';
function greetMe(me){
  console.log('Hello, ' + me + '!');	
}
me = 'Peter';
greetMe('Kevin');

// here is one of the best use cases widely uesd for closure
// In this example, function(response) is a closure, it has a access to the variable which was defiined outside of itself.
function sendRequest(){
  var requestID = '123';
  $.ajax({
    url: '/myUrl',
    success:function(response){
      console.log('Request ' + requestID + ' returned');
    }
  });
}


