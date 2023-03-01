function findMaxNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let checkMax1 = findMaxNumber(10, 5);
console.log("Max Number:", checkMax1);
