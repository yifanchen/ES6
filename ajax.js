//console.clear();

// es6 parameter object destructing
function gg({
  type = 'get',
  url = requireParam('url'),
  data = {},
  success = requireParam('success'),
  error = () => {},
  isAsync = true } = {}) {
    console.log(JSON.stringify(
     { type, url, data, success, error, isAsync  },
     null, 2
     )
    );
}

// this function here creates a required conditions for url and success props.
function requireParam(n) {
  throw new Error(`Miss Params '${n}'`);
}

// try and catch
try {
  gg({
    url: 'http://www.google.com',
    success: () => {}
  })
} catch(e) {
  console.warn(e.message)
}
