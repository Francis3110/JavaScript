/* eslint-disable no-param-reassign */
/**
 * Cho đội hình hiện tại của đội bóng chuyền và số lần k đội đội được giao bóng
 * Tìm vị trí ban đầu của mỗi thành viên trong đội biết rằng vị trí thay đổi theo
 * chiều kim đồng hồ mỗi lần giao bóng
 * Xem volleyballPositions.png
 * @param {string[][]} formation
 * @param {number} k
 */

function volleyballPositions(formation, k) {
  const arr = [...formation];
  k %= 6;

  while (k--) {
    const [[, a], [b, , f], [, d], [c, , e]] = arr;
    arr[1][0] = a;
    arr[3][0] = b;
    arr[2][1] = c;
    arr[3][2] = d;
    arr[1][2] = e;
    arr[0][1] = f;
  }

  return arr;
}

console.log(
  volleyballPositions(
    [
      ['empty', 'Alice', 'empty'],
      ['Bob', 'empty', 'Charlie'],
      ['empty', 'Dave', 'empty'],
      ['Eve', 'empty', 'Frank'],
    ],
    60002
  )
);
