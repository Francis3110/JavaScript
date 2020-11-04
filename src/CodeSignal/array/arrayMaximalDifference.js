/**
 * Cho một mảng, tìm sự khác biệt (hiệu) lớn nhất có thể có của các phần tử
 * trong mảng
 * @param {number[]} arr
 */

function arrayMaximalDifference(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

// 21
console.log(arrayMaximalDifference([19, 32, 11, 23]));
