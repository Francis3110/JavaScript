/**
 * Hoán đổi vị trí phần tử đầu tiên và cuối cùng của mảng
 * @param {number[]} arr
 */

function firstReverseTry(arr) {
  const size = arr.length;
  if (size < 2) {
    return arr;
  }

  const res = [...arr];
  [res[0], res[res.length - 1]] = [res[res.length - 1], res[0]];

  return res;
}

console.log(firstReverseTry([5, 2, 3, 4, 1]));
