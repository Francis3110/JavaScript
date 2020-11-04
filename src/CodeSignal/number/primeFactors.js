/**
 * Phân tích một số thành tích của các thừa số nguyên tố không duy nhất
 * @param {number} n
 */

function primeFactors(n) {
  const res = [];
  let tmp = n;
  for (let i = 2; i <= n; i++) {
    while (tmp % i === 0) {
      res.push(i);
      tmp /= i;
    }
  }
  return res;
}

// 2 2 5 5
console.log(primeFactors(100));
