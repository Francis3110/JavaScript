/**
 * Cho một chuỗi string kiểm tra xem nó có biểu diễn một thời gian chính xác của
 * một đồng hồ 24h hay không
 * Input dạng HH:MM và đảm bảo hai kí tự đầu và cuối là các chữ số
 * @param {string} time
 */

function validTime(time) {
  return /^(([0-1][0-9])|(2[0-3])):[0-5][0-9]$/.test(time);
}

// true
console.log(validTime('13:56'));
// true
console.log(validTime('23:59'));
// false
console.log(validTime('24:60'));
// false
console.log(validTime('02:76'));
