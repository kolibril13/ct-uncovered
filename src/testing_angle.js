function rangeModulo(a, b) {
    if (a > b) {
        [a, b] = [b, a];
      }
    var result = [];
    if (a <= b && (b - a) <= 10) {
        for (var i = a; i <= b; i++) {
            result.push(i);
        }
    } else if (a > b || (b - a) > 10) {
        for (var i = a; i < 21; i++) {
            result.push(i);
        }
        for (var i = 0; i <= b; i++) {
            result.push(i);
        }
    }
    return result;
}
  

  console.log(rangeModulo(13, 17));  // Output: [13, 14, 15, 16, 17]
  console.log(rangeModulo(17, 13));  // Output: [13, 14, 15, 16, 17]
  console.log(rangeModulo(17, 2));   // Output: [17, 18, 19, 20, 0, 1, 2]
  console.log(rangeModulo(2, 17));   // Output: [17, 18, 19, 20, 0, 1, 2]

// but for the second one I get

[
    2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
   12, 13, 14, 15, 16, 17, 18, 19, 20,  0,
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
   11, 12, 13, 14, 15, 16, 17
 ]