function largestPrimeFactor(number) {
  var i = 2;
  while (number > i) {
    if (number % i == 0) {
      number = number / i;
      i = 2;
    } else {
      i++;
    }
  }
  return i;
}

console.log(largestPrimeFactor(13195));
