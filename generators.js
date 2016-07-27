function* fibonacciGenerator(n) {
  let back2 = 0;
  let back1 = 1;
  let current = 0;

  for (let i = 0; i < n -1; i++) {
    current = back1 + back2;
    back2 = back1;
    back1 = current;
    yield current;
  }

  return current;
}

const fibonacci = fibonacciGenerator(10000);

const interval = setInterval(() => {
  const result = fibonacci.next();

  if (result.done) {
    console.log('done!');
    clearInterval(interval);
    return;
  }

  console.log(result.value);
}, 0);
