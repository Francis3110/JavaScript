/**
 * Một hình chữ nhật có các cạnh a và b được vẽ trên mặt phẳng Cartesian.
 * Tâm của nó (điểm giao nhau của các đường chéo) trùng với điểm (0, 0).
 * Nhưng các cạnh của hình chữ nhật không song song với các trục, thay vào đó
 * chúng đang tạo thành các góc 45 độ với các trục.
 * Có bao nhiêu điểm có tọa độ nguyên được đặt bên trong hình chữ nhật đã cho
 * (bao gồm cả các cạnh của nó)?
 * Ràng buộc: 2 <= a, b <= 50
 */

/**
 * Do 4 cạnh màu xanh tạo góc 45 độ nên công thức 4 cạnh tương ứng là:
 *     f1(x, y) = x + y + u = 0 (Tam giác vuông 1 góc = 45 độ thì 2 cạnh góc
 *                               vuông bằng nhau)
 *     f2(x, y) = x + y - u = 0
 *     f3(x, y) = x - y + v = 0 (cạnh trên trái)
 *     f4(x, y) = x - y - v = 0 (cạnh dưới phải)
 *
 *  Điểm O (0, 0) nằm trong hình chữ nhật nên:
 *     f1(0, 0) =  u > 0
 *     f2(0, 0) = -u < 0
 *     f3(0, 0) =  v > 0
 *     f4(0, 0) = -v < 0
 *
 * Suy ra nếu 1 điểm P(x, y) nằm trong hình chữ nhật thì yêu cầu 4 điều kiện:
 *     f1(x, y) = x + y + u > 0
 *     f2(x, y) = x + y - u < 0
 *     f3(x, y) = x - y + v > 0
 *     f4(x, y) = x - y - v < 0
 * <=> | x + y | < u và | x - y | < v
 */

/**
 * @param {number} a
 * @param {number} b
 */
function rectangleRotation(a, b) {
  const u = a / Math.sqrt(2);
  const v = b / Math.sqrt(2);
  const max = Math.floor(Math.sqrt(a * a + b * b));

  let count = 0;
  for (let x = -max; x <= max; x++) {
    for (let y = -max; y <= max; y++) {
      if (Math.abs(x + y) < u && Math.abs(x - y) < v) {
        count++;
      }
    }
  }

  return count;
}

function rectangleRotation2(a, b) {
  const u = Math.floor(a / Math.sqrt(2));
  const v = Math.floor(b / Math.sqrt(2));
  // eslint-disable-next-line no-bitwise
  return (2 * u * v + u + v) | 1;
}
// x|1 <=> nếu x chẵn thì cộng thêm 1

// 23
console.log(rectangleRotation(6, 4));
console.log(rectangleRotation2(6, 4));
