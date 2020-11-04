/**
 * Hãy xem xét các mẫu sau cho một phương trình: a ? b ? c ? d
 * Ở đây mỗi chữ cái là viết tắt của một giá trị nguyên, và ? là viết tắt của
 * dấu bằng hoặc toán tử nhân.
 * Cho mảng chứa bốn số nguyên. Có thể điền vào mẫu bằng các số nguyên,
 * hai toán tử nhân và một dấu bằng, sao cho phương trình có kết quả sẽ đúng
 * hay không?
 * @param {number[]} values
 */

function equationTemplate(values) {
  const [a, b, c, d] = values;
  return (
    a * b === c * d ||
    a * c === b * d ||
    a * d === b * c ||
    a === b * c * d ||
    b === a * c * d ||
    c === a * b * d ||
    d === a * b * c
  );
}

// true
console.log(equationTemplate([2, 4, 3, 6]));
// true
console.log(equationTemplate([-10, -20, 5, 40]));
// false
console.log(equationTemplate([1, 2, 3, 4]));
