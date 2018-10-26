function fiboSum(number) {
  let para = document.getElementById("para");
  var oldestFib = 1;
  var oldFib = 1;
  var newFib = 0;
  var evenSum = [];

  for (i = 0; i < number; i++) {
    newFib = oldestFib + oldFib;
    oldestFib = oldFib;
    oldFib = newFib;

    para.innerHTML += evenSum + "<br>";
    evenSum.push(newFib);
  }
  return evenSum;
}

console.log(fiboSum(200));
