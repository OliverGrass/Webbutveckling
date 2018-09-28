function nthPrime(number) {
  var array = [];
  for (let i = 2; array.length < number; i++) {
    var isNotPrime = false;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isNotPrime = true;
        break;
      }
    }
    if (isNotPrime == false) {
      array.push(i);
    }
  }
  return array[number - 1];
}

console.log(nthPrime(10001));
