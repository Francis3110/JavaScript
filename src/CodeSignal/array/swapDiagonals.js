/**
 * Cho ma trận vuông
 * Hoán đổi vị trí các phần tử nằm trên hai đường chéo chính với nhau theo từng
 * hàng
 * @param {number[][]} matrix
 */

function swapDiagonals(matrix) {
  return matrix.map((arr, i) => {
    // eslint-disable-next-line no-param-reassign
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    return arr;
  });
}

swapDiagonals([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]).forEach((element) => {
  console.log(element);
});
