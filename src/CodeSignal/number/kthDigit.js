/**
 * Cho số nguyên n. Tìm chữ số thứ k, return -1 nếu như số đó không tồn tại
 * @param {number} n
 * @param {number} k
 */

function kthDigit(n, k) {
  return +(` ${n}`.charAt(k) || -1);
}

// 8
console.log(kthDigit(16082, 4));
// -1
console.log(kthDigit(16082, 10));
