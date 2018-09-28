function fiboEvenSum(number) {
  var oldestFib = 1;
  var oldFib = 1;
  var newFib = 0;
  var evenSum = 0;

  for (i = 0; i < number; i++) {
    newFib = oldestFib + oldFib;
    oldestFib = oldFib;
    oldFib = newFib;

    if (newFib % 2 === 0) {
      evenSum += newFib;
    }
  }
  return evenSum;
}

console.log(fiboEvenSum(10));
