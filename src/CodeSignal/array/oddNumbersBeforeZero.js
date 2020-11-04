/**
 * Cho một mảng số nguyên đếm các số lẻ phía trước số 0 (tính từ trái qua phải)
 * @param {number[]} sequence
 */

function oddNumbersBeforeZero(sequence) {
  let res = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const i of sequence) {
    if (i === 0) break;
    if (i % 2) res++;
  }
  return res;
}

// 2
console.log(oddNumbersBeforeZero([1, 2, 3, 0, 4, 5, 6, 7, 8, 9]));
