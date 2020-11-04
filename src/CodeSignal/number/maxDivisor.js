/**
 * Cho một số và một phạm vi. Tìm số lớn nhất trong phạm vi đó chia hết cho số
 * đã cho
 * @param {number} left
 * @param {number} right
 * @param {number} divisor
 */

function maxDivisor(left, right, divisor) {
  for (let i = right; i >= left; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
  return -1;
}

// 9
console.log(maxDivisor(1, 10, 3));
