/* eslint-disable no-restricted-syntax */
/**
 * Bạn có hai mảng số nguyên, a và b và một số nguyên v. Xác định xem có tồn tại
 * một cặp số mà trong đó một số được lấy từ a và số kia từ b mà tổng của chúng
 * bằng v.
 * 0 ≤ a.length, b.length ≤ 10^5
 * -10^9 ≤ a[i], b[i], v ≤ 10^9
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} v
 */

function sumOfTwo(a, b, v) {
  // Đánh dấu số x tồn tại bằng cách gắn true cho array[x]
  // Mảng số dương
  const arr = [];
  // Mảng số âm
  const arrN = [];

  for (const elm of a) {
    if (elm >= 0) arr[elm] = true;
    else arrN[-elm] = true;
  }

  for (const elm of b) {
    const diff = v - elm;
    if ((diff >= 0 && arr[diff]) || (diff < 0 && arrN[-diff])) return true;
  }

  return false;
}

// true
console.log(
  sumOfTwo(
    [17, 72, 18, 72, 73, 15, 83, 90, 8,10, 18],
    [10, 27, 33, 51, 2, 71, 76, 16, 43],
    37
  )
);
