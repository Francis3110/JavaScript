/* eslint-disable no-param-reassign */
/**
 * Một cậu bé đang bắt đầu học cách cộng hai số nguyên.
 * Nhưng anh luôn quên đi phần quan trọng - phần nhớ (4 + 7 = 1 nhớ 1).
 *    456
 * + 1734
 *   ____
 *   1180
 * Kết quả đúng phải là: 2190
 *
 * Cho hai số nguyên, tìm ra kết quả mà cậu bé sẽ tính ra (kết quả sai).
 * Ràng buộc:
 *     0 ≤ a < 10^5,
 *     0 ≤ b < 6 * 10^4
 * @param {number} a
 * @param {number} b
 */

function additionWithoutCarrying(a, b) {
  let result = 0;
  for (let i = 1; a !== 0 || b !== 0; i *= 10) {
    result += (((a % 10) + (b % 10)) % 10) * i;
    a = parseInt(a / 10, 10);
    b = parseInt(b / 10, 10);
  }

  return result;
}

// 1180
console.log(additionWithoutCarrying(456, 1734));
