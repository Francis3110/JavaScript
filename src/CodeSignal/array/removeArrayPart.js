/**
 * Xóa các phần tử nằm trong khoảng l và r
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */

function removeArrayPart(arr, l, r) {
  return arr.slice(0, l).concat(arr.slice(r + 1));
}

console.log(removeArrayPart([0, 1, 2, 3, 4, 5, 6], 2, 4));
