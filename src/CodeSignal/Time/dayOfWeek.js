/**
 * Cho ngày sinh nhật hiện tại, xác định số năm cho đến khi nó lại rơi vào cùng
 * một ngày trong tuần.
 * birthdayDate có dạng mm/dd/yyyy
 * Chú ý trường hợp năm nhuận và sinh nhật vào 29/2.
 * @param {string} birthdayDate
 */

function dayOfWeek(birthdayDate) {
  // eslint-disable-next-line prefer-const
  let [m, d, y] = birthdayDate.split('-').map(Number);
  let res = 0;
  const day = new Date(y, m - 1, d).getDay();
  let dayCheck;
  do {
    res++;
    y++;
    dayCheck = new Date(y, m - 1, d);
    // getDate == d để kiểm tra trong trường hợp năm nhuận
  } while (dayCheck.getDate() !== d || day !== dayCheck.getDay());
  return res;
}

// 6
console.log(dayOfWeek('08-16-2000'));
// 5
console.log(dayOfWeek('02-01-2016'));
// 40
console.log(dayOfWeek('02-29-2072'));
