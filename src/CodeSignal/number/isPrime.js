/**
 * Kiểm tra số có phải là số nguyên tố
 * @param {number} n
 */

function isPrime(n) {
  const boundary = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= boundary; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n >= 2;
}

for (let i = 0; i < 30; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
