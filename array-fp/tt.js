// forEach
function getStockSymbols(stocks) {
var symbols = [];

stocks.forEach(function(stock) {
  symbols.push(stock.symbol);
});

return symbols;
}

var symbols = getStockSymbols([
{ symbol: "XFX", price: 240.22, volume: 23432 },
{ symbol: "TNZ", price: 332.19, volume: 234 },
{ symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));

// map
function getStockSymbols(stocks) {
  return stocks.map(function(stock) {
    return stock.symbol;
  })
}

var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));

// filter
function getStocksOver(stocks, minPrice) {
  return stocks.filter(function(stock) {
    return stock.price >= minPrice;
  })
}

var expensiveStocks = getStocksOver([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
],
150.00);

console.log(JSON.stringify(expensiveStocks));

// chaining
var stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

var filteredStockSymbols =
  stocks.
    filter(function(stock) {
      return stock.price >= 150.00;
    }).
    map(function(stock) {
      return stock.symbol;
    })

filteredStockSymbols.forEach(function(symbol) {
  console.log(symbol);
})

// concatAll
var exchanges = [
  [
      { symbol: "XFX", price: 240.22, volume: 23432 },
      { symbol: "TNZ", price: 332.19, volume: 234 }
    ],
  [
      { symbol: "JXJ", price: 120.22, volume: 5323 },
      { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];


Array.prototype.concatAll = function() {
  var results = [];

  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });

  return results;
};


var stocks =  exchanges.concatAll();

stocks.forEach(function(stock) {
  console.log(JSON.stringify(stock));
});


// Ovservable
var Observable = Rx.Observable;

var button = document.getElementById('button');
/*
var handler = function(e) {
	alert('clicked');
	button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(button, 'click');

var subscription =
	clicks.forEach(
		function onNext(e) {
			alert('clicked');
			subscription.dispose();
		},
		function onError(error) {
			console.log('ERROR!');
		},
		function onCompleted() {
			console.log("done");
		});


// map with Obserable
var Observable = Rx.Observable;

var button = document.getElementById('button');
/*
var handler = function(e) {
	alert('clicked');
	button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(button, 'click');

var points =
	clicks.map(function(e) {
		return {x: e.clientX, y: e.clientY};
	});

var subscription =
	points.forEach(
		function onNext(point) {
			alert('clicked:' + JSON.stringify(point));
			subscription.dispose();
		},
		function onError(error) {
			console.log('ERROR!');
		},
		function onCompleted() {
			console.log("done");
		});



