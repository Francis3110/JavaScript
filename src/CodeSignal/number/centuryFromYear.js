/**
 * Cho một năm trả về thế kỷ tương ứng
 * @param {number} year năm
 * @returns {number} thế kỉ tương ứng
 */

function centuryFromYear(year) {
  return Math.floor(year / 100 + 0.99);
}

console.log(centuryFromYear(1998)); // 20
console.log(centuryFromYear(2000)); // 20
console.log(centuryFromYear(2019)); // 21
console.log(centuryFromYear(1e20)); // 1000000000000000000
