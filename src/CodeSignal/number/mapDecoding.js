/**
 * Một thông điệp tuyệt mật có chứa các chữ cái viết hoa từ 'A' đến 'Z' đã được
 * mã hóa thành các số bằng cách sử dụng ánh xạ sau:
 *     'A' -> 1
 *     'B' -> 2
 *     ...
 *     'Z' -> 26
 * Bạn là một đặc vụ FBI và bạn cần xác định tổng số cách mà tin nhắn có thể
 * được giải mã.
 * Vì câu trả lời có thể rất lớn nên hãy trả về modulo 10^9 + 7.
 * Ràng buộc: 0 ≤ message.length ≤ 10^5
 *
 * "123" có thể được giải mã là "ABC" (1 2 3), "LC" (12 3) hoặc "AW" (1 23),
 * vì vậy tổng số cách là 3.
 * @param {string} message
 */

function mapDecoding(message) {
  // Quy hoạch động
  // (a + b) % d = ((a % d) + (b % d)) % d
  const mod = 1000000007;
  const arrSize = message.length;

  const dp = new Array(arrSize + 1).fill(0);
  dp[0] = 1;
  dp[1] = message.charAt(0) === '0' ? 0 : 1;

  // (a + b) % d = ((a % d) + (b % d)) % d
  for (let i = 2; i <= arrSize; i++) {
    // Số 1 chữ số
    const num1 = parseInt(message.charAt(i - 1), 10);
    if (num1 !== 0) {
      dp[i] = dp[i - 1] % mod;
    }

    // Số 2 chữ số (trường hợp mà 2 chữ số có thể ánh xạ đến một chữ cái)
    const num2 = parseInt(message.substring(i - 2, i), 10);
    if (num2 >= 10 && num2 <= 26) {
      dp[i] += dp[i - 2] % mod;
    }
  }

  return dp[arrSize];
}

// 0
console.log(mapDecoding('0'));
// 0
console.log(mapDecoding('1001'));
// 1
console.log(mapDecoding(''));
// 3
console.log(mapDecoding('123'));
// 5
console.log(mapDecoding('10122110'));
// 782204094
console.log(
  mapDecoding(
    '1221112111122221211221221212212212111221222212122221222112122212121212221212122221211112212212211211'
  )
);
