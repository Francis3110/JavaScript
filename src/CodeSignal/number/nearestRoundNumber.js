/**
 * Tìm round number nhỏ nhất không nhỏ hơn số đã cho
 * Round number là số kết thúc bằng một hoặc nhiều số 0
 * @param {number} value
 */

function nearestRoundNumber(value) {
  while (value % 10 !== 0) {
    // eslint-disable-next-line no-param-reassign
    value++;
  }
  return value;
}

function nearestRoundNumber2(value) {
  // eslint-disable-next-line no-param-reassign
  return value + (9 - (--value % 10));
}

// 100
console.log(nearestRoundNumber(100));
console.log(nearestRoundNumber2(100));

// 130
console.log(nearestRoundNumber(123));
console.log(nearestRoundNumber2(123));

// 9700
console.log(nearestRoundNumber(9696));
console.log(nearestRoundNumber2(9696));
