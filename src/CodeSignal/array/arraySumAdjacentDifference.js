/**
 * Tìm tổng sự khác biệt tuyệt đối giữa các phần tử liền kề trong một mảng cho trước
 * @param {number[]} arr
 */
function arraySumAdjacentDifference(arr) {
  // 0 là initialValue
  return arr.reduce(
    (accumulator, c, i) =>
      i ? accumulator + Math.abs(c - arr[i - 1]) : accumulator,
    0
  );
}

console.log(arraySumAdjacentDifference([4, 7, 1, 2]));

/**
 * Trong lần đầu tiên callback được gọi, accumulator and currentValue có thể có
 * một trong hai giá trị. Nếu tham số initialValue được cung cấp cho reduce(),
 * thì accumulator sẽ bằng initialValue, và currentValue sẽ bằng phần tử đầu tiên
 * của mảng. Nếu không có initialValue, accumulator sẽ bằng phần tử đầu tiên của
 * mảng, và currentValue sẽ bằng phần tử thứ hai.
 */
