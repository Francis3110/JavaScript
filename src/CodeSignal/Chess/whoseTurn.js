/**
 * Hãy tưởng tượng một bàn cờ vua tiêu chuẩn chỉ có hai hiệp sĩ trắng
 * và hai hiệp sĩ đen được đặt ở vị trí bắt đầu tiêu chuẩn của họ:
 *   - Các hiệp sĩ trắng trên b1 và g1
 *   - Các hiệp sĩ đen trên b8 và g8
 * Có hai người chơi: một người chơi quân màu trắng, người kia chơi quân đen.
 * Trong mỗi lần di chuyển, người chơi chọn một trong những hiệp sĩ của mình và
 * di chuyển nó đến một hình vuông không có người theo quy tắc cờ vua tiêu chuẩn.
 * Do đó, một hiệp sĩ trên d5 có thể di chuyển đến bất kỳ ô vuông nào sau đây:
 * b6, c7, e7, f6, f4, e3, c3 và b4, miễn là nó không bị chiếm giữ bởi
 * một hiệp sĩ quân mình hay hiệp sĩ địch.
 * Các người chơi thay phiên nhau thực hiện các bước di chuyển, bắt đầu với
 * người chơi quân trắng. Cho vị trí của 4 hiệp sĩ (theo thứ tự như trên) sau
 * một số lần di chuyển không xác định, hãy xác định xem đó là lượt của ai.
 * Note: true là quân trắng và false là quân đen
 */

/**
 * Quan sát thấy lượt của người chơi quân trắng thì trên bàn cờ: 2 ô trắng
 * và 2 ô đen hoặc 4 đen hoặc 4 trắng
 */

/**
 * @param {string} p
 */
function whoseTurn(p) {
  // Màu của ô vuông vị trí pos
  const isWhiteColor = (pos) =>
    (pos.charCodeAt(0) - 97 + pos.charCodeAt(1) - 49) % 2 !== 0;

  let white = 0;
  for (let i = 0; i < p.length; i += 3) {
    const pos = p[i] + p[i + 1];
    if (isWhiteColor(pos)) {
      white++;
    }
  }

  return white === 0 || white === 2 || white === 4;
}

// true
console.log(whoseTurn('g1;g2;g3;g4'));
// false
console.log(whoseTurn('c3;g1;b8;g8'));
