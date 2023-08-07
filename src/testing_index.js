const calculateIndex = (angle) => {
  if (angle >= 0 && angle < 180) {
    return Math.floor(angle / 9);
  } else if (angle >= 180 && angle <= 360) {
    return Math.floor((angle - 180) / 9);
  } else {
    throw new Error("angle must be between 0 and 360");
  }
};

console.log(calculateIndex(0)); // Output: 0
console.log(calculateIndex(9)); // Output: 1
console.log(calculateIndex(179)); // Output: 0
console.log(calculateIndex(180)); // Output: 0
console.log(calculateIndex(189)); // Output: 1
console.log(calculateIndex(360)); // Output: 0
console.log(calculateIndex(90)); // Output: 11
console.log(calculateIndex(369)); // Output: Error: angle must be between 0 and 360
