// This is an exmaple of separating Ajax out by using Promise()
// Good to know there is way to seprate the ajax logic out of the function.

function a() {
  let p = new Promise((reslove, reject) => {
    if(true) {
      reslove();
    }else{
      reject();
    }
  })
    .then((data) => {
      b();
    })
    .catch((error) => {

    })
}

function b() {
  $.ajax({
    url: url,
    dataType: 'json',
    method: GET
  })
}
