// This is an exmaple of separating Ajax out by using Promise()

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
