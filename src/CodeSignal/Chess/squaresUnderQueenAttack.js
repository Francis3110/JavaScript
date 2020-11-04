/**
 * Cho bàn cờ n * n (Chỉ số bắt đầu từ 0), một mảng queens chứa các vị trí của
 * quân hậu và mảng queries chứa các truy vấn. Đối với mỗi truy vấn, xác định
 * xem nó có thể bị tấn công bởi một quân hậu bất kì hay không?
 * Constraints:
 *     0 ≤ queens.length ≤ 15 · 10^4
 *     queens[i].length = 2
 *     0 ≤ queens[i][j] ≤ n - 1
 * @param {number} n
 * @param {number[][]} queens
 * @param {number[][]} queries
 */

function squaresUnderQueenAttack(n, queens, queries) {
  const [rows, cols, adds, subs] = [new Set(), new Set(), new Set(), new Set()];

  queens.forEach(([x, y]) => {
    // Hàng và cột
    rows.add(x);
    cols.add(y);
    // Đường chéo
    adds.add(x + y);
    subs.add(x - y);
  });

  return queries.map(
    ([x, y]) => rows.has(x) || cols.has(y) || adds.has(x + y) || subs.has(x - y)
  );
}

// [true, false, false, true, true, true, false]
console.log(
  squaresUnderQueenAttack(
    5,
    [
      [1, 1],
      [3, 2],
    ],
    [
      [1, 1],
      [0, 3],
      [0, 4],
      [3, 4],
      [2, 0],
      [4, 3],
      [4, 0],
    ]
  )
);
