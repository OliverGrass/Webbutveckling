function* generatePrimes() {
  const markedNotPrimeMap = new Map();
  let valueToCheck = 2;
  while (true) {
    if (!markedNotPrimeMap.has(valueToCheck)) {
      yield valueToCheck;
      markedNotPrimeMap.set(valueToCheck ** 2, [valueToCheck]);
    } else {
      let primes = markedNotPrimeMap.get(valueToCheck);
      primes.forEach(prime => {
        let nextMultipleOfPrime = prime + valueToCheck;
        if (markedNotPrimeMap.has(nextMultipleOfPrime)) {
          markedNotPrimeMap.get(nextMultipleOfPrime).push(prime);
        } else {
          markedNotPrimeMap.set(nextMultipleOfPrime, [prime]);
        }
      });
      markedNotPrimeMap.delete(valueToCheck);
    }
    valueToCheck += 1;
  }
}

let gen = generatePrimes();
for (var i = 0; i < 1000000; i++) {
  gen.next();
}
console.log(gen.next().value);
