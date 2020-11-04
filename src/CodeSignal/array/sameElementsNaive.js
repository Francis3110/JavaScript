/**
 * Tìm số phần tử xuất hiện trong cả hai mảng cho trước
 * Đảm bảo các phần tử trong mỗi mảng là khác nhau
 * @param {number[]} a
 * @param {number[]} b
 */

function sameElementsNaive(a, b) {
  const hash = [];
  // eslint-disable-next-line no-return-assign
  a.forEach((elm) => (hash[elm] = true));

  let res = 0;
  b.forEach((elm) => {
    if (hash[elm]) {
      res++;
    }
  });

  return res;
}

// 2
console.log(sameElementsNaive([2, 3, 1, 4], [6, 4, 5, 3]));
