/**
 * Cho n, kiểm tra xem n = k! với k nguyên không âm hay không?
 * @param {number} n với 0 < n < 2^53
 */

function checkFactorial(n) {
  let x = 1;
  while (n > 1) {
    if (n % x === 0) {
      // eslint-disable-next-line no-param-reassign
      n /= x++;
    } else {
      return false;
    }
  }
  return true;
}

// 5!
console.log(checkFactorial(120));
console.log(checkFactorial(121));

// 18!
console.log(checkFactorial(6402373705728000));
console.log(checkFactorial(6402373705728000 + 1));

// 19! sẽ dẫn đến sai số
console.log(checkFactorial(121645100408832000));
console.log(checkFactorial(121645100408832000 + 1));
