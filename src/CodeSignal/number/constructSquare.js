/**
 * Cho một string bao gồm các chữ cái tiếng Anh viết thường, tìm số chính
 * phương lớn nhất có thể thu được bằng cách sắp xếp lại các ký tự của string
 * và thay thế chúng bằng bất kỳ chữ số nào bạn muốn (số 0 không được phép đứng
 * đầu) trong đó các ký tự luôn luôn ánh xạ đến cùng một chữ số và các ký tự
 * khác nhau luôn ánh xạ tới các chữ số khác nhau. Nếu không có, trả về -1.
 * 1 ≤ s.length < 10
 */

/**
 * Đếm tần suất xuất hiện các kí tự (trả về mảng kết quả đã sắp xếp tăng dần)
 * @param {string} s
 */
function countChar(s) {
  const arrOrigin = s.split('');
  const arrUniqueCharSorted = [...new Set(arrOrigin)];
  const res = Array.from(new Array(arrUniqueCharSorted.length), () => 0);
  arrOrigin.forEach((elm) => res[arrUniqueCharSorted.indexOf(elm)]++);
  return res.sort();
}

/**
 *
 * @param {string} s
 */
function constructSquare(s) {
  let result = -1;
  const rule = countChar(s);

  // Bắt đầu từ số chính phương lơn nhất có một chữ số là 9 = 3 * 3
  for (let i = 3; ; i++) {
    const squareNum = i * i;
    const squareNumTypeStr = squareNum.toString();

    const test = countChar(squareNumTypeStr);
    if (squareNumTypeStr.length >= s.length) {
      if (squareNumTypeStr.length > s.length) {
        break;
      }
      if (test.join('') === rule.join('')) {
        result = squareNum;
      }
    }
  }

  return result;
}

// 900
console.log(constructSquare('aba'));

// 810000
console.log(constructSquare('abcbbb'));
