let a = ['Geogre', 'Yifan', 'Hostage', 'Mike', 'Bean', 'Tiger'];

// Getting rest of the arguments as array
function networkAction(context, method, ...rest) {
  // rest is an array
  return method.apply(context, rest);
}

// This is awesome, without writing down entire array, directly use ...rest
myArguments = ['foo', 'bar', 123];
myFunction(...myArguments);
