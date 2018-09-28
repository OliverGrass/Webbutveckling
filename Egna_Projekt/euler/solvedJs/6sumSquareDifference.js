function sumSquareDifference(number) {
  var sum1 = 0;
  var sum2 = 0;
  var finalSum = 0;

  for (let i = 0; i <= number; i++) {
    sum1 += Math.pow(i, 2);
  }
  for (let i = 0; i <= number; i++) {
    sum2 += i;
  }
  sum2 = Math.pow(sum2, 2);
  finalSum = sum2 - sum1;

  return finalSum;
}

console.log(sumSquareDifference(10));
