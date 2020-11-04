/**
 * Cho một ma trận số nguyên hình chữ nhật, kiểm tra xem có thể sắp xếp lại các
 * hàng của nó theo cách sao cho tất cả các cột của nó trở thành các dãy tăng
 * nghiêm ngặt (đọc từ trên xuống dưới) hay không?
 * Ràng buộc:
 *     1 ≤ matrix.length ≤ 10,
 *     1 ≤ matrix[0].length ≤ 10,
 *    -300 ≤ matrix[i][j] ≤ 300
 * @param {number[][]} matrix
 */

function rowsRearranging(matrix) {
  // Sắp xếp lại các hàng của matrix dựa vào phần tử đầu tiên của mỗi hàng
  matrix.sort((a, b) => a[0] - b[0]);

  // Kiểm tra từng cột
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 1; i < matrix.length; i++) {
      if (matrix[i - 1][j] >= matrix[i][j]) {
        return false;
      }
    }
  }

  return true;
}

// true
console.log(
  rowsRearranging([
    [6, 4],
    [2, 2],
    [4, 3],
  ])
);
