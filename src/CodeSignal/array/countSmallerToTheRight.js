/**
 * Bạn có mảng số nguyên nums và bạn cần xây dựng một mảng counts mới
 * Trong mảng counts mới, counts[i] là số phần tử nhỏ hơn ở bên phải của nums[i]
 * Bạn được yêu cầu tìm tổng các phần tử của mảng counts.
 * Guaranteed constraints:
 *     0 ≤ nums.length ≤ 5 * 10e4,
 *    -10e5 ≤ nums[i] ≤ 10e5
 */

/**
 * Tìm vị trí (idx) trong arr mà khi chèn val vào đó thì mà arr vẫn là mảng tăng
 * Note: idx cũng là số lượng phần tử trong arr mà nhỏ hơn val
 * @param {number[]} arr
 * @param {number} val
 */
function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    // eslint-disable-next-line no-bitwise
    const mid = (low + high) >> 1;
    if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

/**
 * Bắt đầu đếm lần lượt từ phần tử cuối cùng bên phải trở về, sau đó chuyển phần
 * tử đó vào mảng sorted.
 * Sử dụng binarySearch để đếm.
 * @param {number[]} nums
 */
function countSmallerToTheRight(nums) {
  const sorted = [];
  let count = 0;
  while (nums.length > 0) {
    const lastElm = nums.pop();
    // Số phần tử nhỏ hơn lastElm
    const idx = binarySearch(sorted, lastElm);
    count += idx;
    sorted.splice(idx, 0, lastElm);
  }
  return count;
}

// 4
console.log(countSmallerToTheRight([3, 8, 4, 1]));
