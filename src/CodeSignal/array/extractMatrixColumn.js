/**
 * Cho ma trận hình chữ nhật (matrix), trả về các các phần tử trên cột column
 * @param {number[]} matrix
 * @param {number} column
 */

function extractMatrixColumn(matrix, column) {
  return matrix.map((row) => row[column]);
}

console.log(
  extractMatrixColumn(
    [
      [1, 2, 0, 4],
      [5, 6, 0, 8],
      [8, 9, 0, 10],
    ],
    2
  )
);
