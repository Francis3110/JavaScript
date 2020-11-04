/**
 * Hãy xem xét một chuỗi chỉ chứa các chữ cái và khoảng trắng. Nó được phép
 * thay thế một số khoảng trắng (có thể hoặc không) bằng các ký hiệu dòng mới
 * để có được một văn bản nhiều dòng. Gọi một văn bản nhiều dòng là đẹp khi và
 * chỉ khi mỗi dòng của nó (nghĩa là các chuỗi con được phân định bởi một ký tự
 * dòng mới) có chứa số lượng ký tự bằng nhau (chỉ tính đến các chữ cái và
 * khoảng trắng khi đếm tổng số ký tự). Gọi chiều dài của dòng là text width.
 * Cho một chuỗi và 2 số nguyên l và r (l ≤ r), kiểm tra xem có thể có được một
 * văn bản đẹp từ chuỗi có text width nằm trong phạm vi [l, r] không?
 * Constraints:
 *     String không có các dẫu cách dư thừa
 *     1 ≤ l ≤ r ≤ 15
 *     10 ≤ inputString.length ≤ 40
 */

function beautifulText(s, l, r) {
  for (let width = l; width <= r; width++) {
    let idxSpace = width;
    while (s[idxSpace] === " ") {
      idxSpace += width + 1;
    }

    if (idxSpace === s.length) {
      return true;
    }
  }
  return false;
}

// true
// Look at this
// example of a
// correct text
console.log(beautifulText("Look at this example of a correct text", 5, 15));

// false
console.log(beautifulText("abc def ghi", 4, 10));
