/**
 * Cho tọa độ quân hậu, trả về một mảng (được sắp xếp theo thứ tự từ điển)
 * tọa độ các ô an toàn trước sự tấn công của quân hậu.
 * @param {string} q
 */

function chessQueen(q) {
  const safe = [];
  const colQ = q.charCodeAt(0);
  const rowQ = q.charCodeAt(1);

  for (let col = 97; col <= 104; col++) {
    if (col === colQ) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const diffCol = Math.abs(col - colQ);
    for (let row = 49; row <= 56; row++)
      if (row !== rowQ && Math.abs(row - rowQ) !== diffCol) {
        safe.push(String.fromCharCode(col) + String.fromCharCode(row));
      }
  }

  return safe;
}

console.log(chessQueen('d4'));
