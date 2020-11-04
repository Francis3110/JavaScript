/**
 * Hãy tưởng tượng một lưới hình chữ nhật màu trắng gồm n hàng và m cột được
 * chia thành hai phần bởi một đường chéo chạy từ góc trên cùng bên trái sang
 * góc dưới cùng bên phải. Bây giờ tô lưới bằng hai màu theo các quy tắc sau:
 *    Một ô được sơn màu đen nếu nó có ít nhất một điểm chung với đường chéo
 *    Nếu không, ô sẽ được sơn màu trắng.
 * Đếm số lượng ô được sơn màu đen.
 *
 * Hữu ích https://en.wikipedia.org/wiki/Slope
 * @param {number} n
 * @param {number} m
 */

function countBlackCells(n, m) {
  // Tìm ước chung lớn nhất
  const gcd = (...arr) => {
    // eslint-disable-next-line no-underscore-dangle
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return [...arr].reduce((a, b) => _gcd(a, b));
  };

  return n - 1 + m - 1 + gcd(n, m);
}

// 6
console.log(countBlackCells(3, 4));
