/**
 * Định nghĩa the middle of the array như sau:
 *    Nếu mảng có số lượng số phần lẻ, middle là phần tử ở giữa (chỉ mục size/2)
 *    Nếu mảng có phần tử chẵn thì middle = tổng của 2 phần tử ở giữa mảng
 * Một mảng gọi là smooth nếu phần tử đầu bằng phần tử cuối và bằng middle
 * @param {number[]} arr
 */

function isSmooth(arr) {
  let mid;
  if (arr.length % 2 === 0) {
    mid = arr[arr.length / 2] + arr[arr.length / 2 - 1];
  } else {
    mid = arr[Math.floor(arr.length / 2)];
  }
  return arr[0] === mid && mid === arr[arr.length - 1];
}

// true
console.log(isSmooth([7, 2, 2, 5, 10, 7]));
