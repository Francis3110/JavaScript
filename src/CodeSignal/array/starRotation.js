// Xem xét một phân đoạn vuông (2k + 1) × (2k + 1) của ma trận hình chữ nhật.
// Gọi liên kết của hai đường chéo dài nhất, cột giữa và hàng giữa là một ngôi sao.
// Cho tọa độ tâm của ngôi sao (center) và chiều rộng (width) của nó, xoay nó
// 45*t độ theo chiều kim đồng hồ đồng thời giữ vị trí của tất cả các phần tử của
// ma trận không thuộc về ngôi sao đó. (Chỉ xoay các phần tử của ngôi sao)
// Ví dụ: starRotation.png

function starRotation(matrix, width, center, t) {
  t %= 8; // 8 * 45 = 360
  const oX = center[0];
  const oY = center[1];
  while (t--) {
    // Xử lý từng vòng một từ trong ra ngoài
    for (let i = 1; i <= width / 2; i++) {
      const save = matrix[oX - i][oY - i];
      matrix[oX - i][oY - i] = matrix[oX][oY - i];
      matrix[oX][oY - i] = matrix[oX + i][oY - i];
      matrix[oX + i][oY - i] = matrix[oX + i][oY];
      matrix[oX + i][oY] = matrix[oX + i][oY + i];
      matrix[oX + i][oY + i] = matrix[oX][oY + i];
      matrix[oX][oY + i] = matrix[oX - i][oY + i];
      matrix[oX - i][oY + i] = matrix[oX - i][oY];
      matrix[oX - i][oY] = save;
    }
  }
  return matrix;
}

// [[1,0,0,2,0,0,3],
//  [0,1,0,2,0,3,0],
//  [0,0,2,3,4,0,0],
//  [8,8,1,9,5,4,4],
//  [0,0,8,7,6,0,0],
//  [0,7,0,6,0,5,0],
//  [7,0,0,6,0,0,5]]

console.log(
  starRotation(
    [
      [1, 0, 0, 2, 0, 0, 3],
      [0, 1, 0, 2, 0, 3, 0],
      [0, 0, 1, 2, 3, 0, 0],
      [8, 8, 8, 9, 4, 4, 4],
      [0, 0, 7, 6, 5, 0, 0],
      [0, 7, 0, 6, 0, 5, 0],
      [7, 0, 0, 6, 0, 0, 5],
    ],
    3,
    [3, 3],
    15
  )
);
