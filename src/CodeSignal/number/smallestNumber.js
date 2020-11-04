/**
 * Trả về số nguyên không âm nhỏ nhất có n chữ số
 * @param {number} n
 */

// Cần  `- !n` vì 10^0 = 1 không phải = 0
function smallestNumber(n) {
  // eslint-disable-next-line no-param-reassign
  return 10 ** --n - !n;
}

// 0
console.log(smallestNumber(1));
// 10
console.log(smallestNumber(2));
