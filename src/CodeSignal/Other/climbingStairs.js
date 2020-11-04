/**
 * Bạn đang leo lên một cầu thang có n bước. Bạn có thể thực hiện 1 bước hoặc 2
 * bước tại một thời điểm. Tính toán có bao nhiêu cách riêng biệt bạn có thể leo
 * lên đỉnh cầu thang.
 * @param {Number} 1 ≤ n ≤ 50
 */

function climbingStairs(n) {
  const dp = [0, 1, 2];
  while (dp.length - 1 < n) {
    const arrSize = dp.length;
    dp.push(dp[arrSize - 1] + dp[arrSize - 2]);
  }
  return dp[n];
}

// 1
console.log(climbingStairs(1));
// 2
console.log(climbingStairs(2));
// 5
console.log(climbingStairs(4));
// 63245986
console.log(climbingStairs(38));
// 433494437
console.log(climbingStairs(42));
