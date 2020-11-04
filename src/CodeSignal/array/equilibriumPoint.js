/**
 * Vị trí cân bằng trong một mảng là một vị trí tại đó tổng các phần tử trước nó
 * bằng tổng các phần tử sau nó. Cho một mảng mảng, nhiệm vụ của bạn là xác định
 * vị trí cân bằng vị trí nào xảy ra đầu tiên trong mảng. Nếu không có vị trí
 * cân bằng return -1.
 * @param {number[]} arr
 */

function equilibriumPoint(arr) {
  const sumArr = arr.reduce((s, n) => s + n);
  let sumRight = sumArr;
  let sumLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    sumRight -= arr[i];
    if (sumLeft === sumRight) {
      return i + 1;
    }
    sumLeft += arr[i];
  }
  return -1;
}

// 1
console.log(equilibriumPoint([5]));
// 1
console.log(equilibriumPoint([1, -5, 2, 3]));
// 4
console.log(equilibriumPoint([10, 5, 3, 5, 2, 2, 6, 8]));
// -1
console.log(equilibriumPoint([12, 6, 11, 40, 32, 31, 38, 10, 9]));
