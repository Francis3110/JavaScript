/**
 * Cần bổ sung tối thiểu bao nhiêu số để thu được mảng tăng dạng x, x+1, x+2, ...
 * @param {number[]} arr
 */

function makeArrayConsecutive2(arr) {
  return Math.max(...arr) - Math.min(...arr) - arr.length + 1;
}

// 3
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
