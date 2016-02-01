//resursion
var countDownForm = (num) => {
  if(num === 0) return; 
  console.log(num);
  countDownForm(num - 1)
}
countDownForm(10);
