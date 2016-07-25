let symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

function getStockSymbols(lev1_holder) {
  let ss_return_value = [];

  lev1_holder.forEach((item) => {
    // here push whatever you like, price or volume
    ss_return_value.push(item.symbol);
  })

  return  ss_return_value.sort();

}

console.log(JSON.stringify(symbols));
