/* eslint-disable camelcase */
/**
 * Chi phí gọi điện thoại được xác định như sau:
 *    Phút đầu tiên của cuộc gọi có giá min1 xu
 *    Mỗi phút từ thứ 2 đến thứ 10 (bao gồm nó) chi phí min2_10 xu
 *    Mỗi phút từ phút thứ 10 chi phí min11 xu
 * Bạn có s xu trong tài khoản. Thời lượng của cuộc gọi dài nhất (tính bằng
 * phút được làm tròn xuống số nguyên gần nhất) bạn có thể gọi là bao nhiêu?
 * @param {number} min1
 * @param {number} min2_10
 * @param {number} min11
 * @param {number} s
 */

function phoneCall(min1, min2_10, min11, s) {
  if (s < min1) {
    return 0;
  }

  if (s < min1 + 9 * min2_10) {
    return parseInt(1 + (s - min1) / min2_10, 10);
  }

  return parseInt(1 + 9 + (s - min1 - 9 * min2_10) / min11, 10);
}

// 14
console.log(phoneCall(3, 1, 2, 20));
// 3
console.log(phoneCall(1, 2, 1, 6));
