/**
 * Khi một ngọn nến đốt xong, nó còn lại một phần sáp thừa.
 * Từ makeNew sáp thừa trên có thể tạo thành một cây nến khác.
 * Bạn có candlesNumber cây nến.
 * Tổng số nến bạn có thể đốt là bao nhiêu?
 * Giả sử rằng bạn tạo ra nến mới ngay khi bạn có đủ số sáp thừa?
 * @param {number} candlesNumber
 * @param {number} makeNew
 */

// Khi đốt makeNew cây nến ta còn lại candlesNumber - makeNew cây nến cộng với
// 1 cây được làm từ makeNew phần sáp thừa
function candles(candlesNumber, makeNew) {
  return candlesNumber >= makeNew
    ? makeNew + candles(candlesNumber - makeNew + 1, makeNew)
    : candlesNumber;
}

// 9
console.log(candles(5, 2));
