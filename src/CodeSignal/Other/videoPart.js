/**
 * Bạn đã xem một video trong một khoảng thời gian. Biết tổng thời lượng video,
 * hãy tìm hiểu phần nào của video bạn đã xem.
 * @param {string} part
 * @param {string} total
 */

function videoPart(part, total) {
  const calSecond = (time) => {
    const [h, m, s] = time.split(':');
    return h * 3600 + +m * 60 + +s;
  };

  const a = calSecond(part);
  const b = calSecond(total);

  const gcd = (...arr) => {
    // eslint-disable-next-line no-underscore-dangle
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
    // eslint-disable-next-line no-shadow
    return [...arr].reduce((a, b) => _gcd(a, b));
  };

  const gcdAB = gcd(a, b);

  return [a / gcdAB, b / gcdAB];
}

// [1, 3]  (1/3 video)
console.log(videoPart('02:20:00', '07:00:00'));
// [7, 30]
console.log(videoPart('00:02:20', '00:10:00'));
// [6119, 7200]
console.log(videoPart('01:41:59', '02:00:00'));
