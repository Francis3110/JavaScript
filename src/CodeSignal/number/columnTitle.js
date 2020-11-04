/**
 * Phần mềm Spreadsheet sử dụng mẫu đặt tên nhất quán cho các cột, trong đó cột
 * đầu tiên được đặt tên A, cột thứ hai được đặt tên B, cột thứ 27 được đặt tên
 * là AA cột thứ 28 được đặt tên là AB, v.v.
 * Cho một số nguyên dương, trả về tiêu đề cột tương ứng như nó sẽ xuất hiện
 * trong bảng tính.
 * @param {number} n
 */

function columnTitle(n) {
  let res = n === 0 ? 'A' : '';
  // eslint-disable-next-line no-param-reassign
  while (n-- !== 0) {
    res = String.fromCharCode((n % 26) + 65) + res;
    // eslint-disable-next-line no-param-reassign
    n = parseInt(n / 26, 10);
  }
  return res;
}

// A Z AA
console.log(columnTitle(1), columnTitle(26), columnTitle(27));
