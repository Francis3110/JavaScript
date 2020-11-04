/**
 * Tìm tổng tất cả các ước của một số nguyên cho trước
 * @param {number} n
 */

function sumOfDivisors(n) {
  let res = 0;
  for (let i = 0; i * i <= n; i++) {
    if (n % i === 0)
      if (i !== n / i) res += i + n / i;
      else res += i;
  }
  return res;
}

// 28
console.log(sumOfDivisors(12));
