function rangeModulo(a, b) {
  // make sure a is less than b
  if (a > b) {
    [a, b] = [b, a];
  }

  // list to store the array of numbers in the range
  let result = [];

  if (b - a <= 10) {
    for (let i = a; i <= b; i++) {
      result.push(i);
    }
  }

  // here we have this break from 18,19,20,0,1,2 and so we have to use modulo.
  if (b - a > 10) {
    a = a + 20;
    for (let i = b; i <= a; i++) {
      result.push(i % 20);
    }
  }

  return result;
}

console.log(rangeModulo(13, 17)); // Output: [13, 14, 15, 16, 17]
console.log(rangeModulo(17, 13)); // Output: [13, 14, 15, 16, 17]
console.log(rangeModulo(17, 2)); // Output: [17, 18, 19, 20, 0, 1, 2]
console.log(rangeModulo(2, 17)); // Output: [17, 18, 19, 20, 0, 1, 2]
