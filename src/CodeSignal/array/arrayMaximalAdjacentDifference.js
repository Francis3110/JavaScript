/**
 * Tìm sự chệnh lệch tối đa giữa 2 phần tử liền kề bất kì
 * @param {number[]} arr
 */

function arrayMaximalAdjacentDifference(arr) {
  let res = Math.abs(arr[1] - arr[0]);
  for (let i = 2; i < arr.length; i++) {
    const tmp = Math.abs(arr[i] - arr[i - 1]);
    if (tmp > res) res = tmp;
  }
  return res;
}

// 3
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
