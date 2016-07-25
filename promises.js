// promises are a lot like callbacks, but more powerful becuase they are composable. When having more than mutiple things to 'callback', using promises are ideal.

//let tt = new Promise(function (resolve, reject) {
  //setTimeout(function () {
    //if(true) {
      //resolve('This is es5 true');
    //}else {
      //reject('This is es5 false');
    //}
  //}, 500)
//})

let tt = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true) {
      resolve('true here');
    }else {
      reject('false here');
    }
  }, 500)
})

tt.then(function (data) {
  console.log(`Success: ${ data }`);
})

//tt.then((data) => {
  //console.log(`Success: ${ data }`);
//})

tt.catch((error) => { console.log(`Fail: ${ error }`); })

