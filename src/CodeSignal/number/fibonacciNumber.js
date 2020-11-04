/**
 * Tìm số fibonacci thứ n với F0 = 0, F1 = 1, f2 = 1, F3 = 2, ...
 * @param {number} n
 */

function fibonacciNumber(n) {
  let f0 = 0;
  let f1 = 1;
  let res = 0;

  if (n === 1) {
    return 1;
  }

  for (let i = 2; i <= n; i++) {
    res = f0 + f1;
    f0 = f1;
    f1 = res;
  }

  return res;
}

for (let i = 0; i < 20; i++) {
  console.log(fibonacciNumber(i));
}
