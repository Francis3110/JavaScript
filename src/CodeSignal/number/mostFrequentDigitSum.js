/**
 * Một toán tử step(x) hoạt động như sau: Nó thay đổi một số x thành x - s(x)
 * trong đó s(x) là tổng các chữ số của x. Bạn quyết định xây dựng một dãy số
 * giảm dần: n, step(n), step(step(n)), ...  với 0 là phần tử sau cùng.
 * Xây dựng một dãy không đủ cho bạn, vì vậy bạn thay thế tất cả các phần tử
 * của dãy trên bằng tổng các chữ số của chúng s(x).
 * Bây giờ bạn tò mò về số nào xuất hiện trong dãy mới thường xuyên nhất.
 * Nếu có một vài câu trả lời, hãy trả về câu trả lời tối đa.
 * 1 ≤ n ≤ 10^5
 * @param {number} n
 */

function mostFrequentDigitSum(n) {
  // eslint-disable-next-line no-nested-ternary
  return n >= 999 ? 18 : n >= 9 ? 9 : n;
}

// 7
console.log(mostFrequentDigitSum(7));
// 9
console.log(mostFrequentDigitSum(88));
// 9
console.log(mostFrequentDigitSum(238));
// 18
console.log(mostFrequentDigitSum(478209));

console.log('----------------------------------------------------------------');

function mostFrequentDigitSum2(n) {
  const s = (x) => {
    const tmp = x.toString().split('');
    let sum = 0;
    for (let i = 0; i < tmp.length; i++) {
      sum += +tmp[i];
    }
    return sum;
  };

  const step = (x) => {
    // eslint-disable-next-line no-param-reassign
    x -= s(x);
    return x;
  };

  const counts = {};
  while (n !== 0) {
    const sum = s(n);
    if (counts[sum]) {
      // eslint-disable-next-line operator-assignment
      counts[sum] = counts[sum] + 1;
    } else {
      counts[sum] = 1;
    }
    // eslint-disable-next-line no-param-reassign
    n = step(n);
  }

  let countMax = 0;
  let res;
  // eslint-disable-next-line no-restricted-syntax
  for (const num in counts) {
    if (counts[num]) {
      const count = counts[num];
      if (count > countMax) {
        res = num;
        countMax = count;
      }
      if (count === countMax && num > res) {
        res = num;
      }
    }
  }

  return res;
}

// 18
console.log(mostFrequentDigitSum2(478209));
// 27
console.log(mostFrequentDigitSum2(478209 + 1));
// 18
console.log(mostFrequentDigitSum2(478209 + 22));
