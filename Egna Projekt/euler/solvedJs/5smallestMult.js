function smallestMult(n) {
  for (var i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {
    var found = true;
    for (var e = 3; e <= n; e++) {
      if (i % e != 0) {
        found = false;
        break; // stop testing other divisors
      }
    }
    if (found == true) {
      break;
    }
  }
  return i;
}

console.log(smallestMult(20));
