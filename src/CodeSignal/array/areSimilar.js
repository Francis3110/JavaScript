/**
 * Hai mảng được gọi là tương tự nhau nếu như ta có thể thu được mảng này bằng
 * cách hoán đổi tối đa một cặp phần tử trong mảng kia.
 * @param {number[]} a
 * @param {number[]} b
 */

function areSimilar(a, b) {
  if (a.join() === b.join()) {
    return true;
  }

  // Tìm 2 phần tử khác nhau đầu tiên và hoán đổi
  const tmp = [];
  let cnt = 0;
  for (let i = 0; i < a.length && cnt < 2; i++) {
    if (a[i] !== b[i]) {
      tmp[cnt++] = i;
    }
  }
  // eslint-disable-next-line no-param-reassign
  [a[1], a[0]] = [a[0], a[1]];

  return a.join() === b.join();
}

// true
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
