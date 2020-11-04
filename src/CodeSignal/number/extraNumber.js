/**
 * Cho 3 số nguyên a, b, c. Đảm bảo trong 3 số có 2 số bằng nhau, tìm số thứ ba
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */

function extraNumber(a, b, c) {
  // eslint-disable-next-line no-nested-ternary
  return a === b ? c : a === c ? b : a;
}

function extraNumber2(a, b, c) {
  // n ^ n = 0   0 ^ n = n
  // eslint-disable-next-line no-bitwise
  return a ^ b ^ c;
}

// 8
console.log(extraNumber(6, 8, 6));
console.log(extraNumber2(6, 6, 8));
