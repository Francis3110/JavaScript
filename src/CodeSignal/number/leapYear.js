// Kiểm tra năm nhuận

const leapYear = (y) => y % (y % 5 ? 4 : 16) < 1;

// true
console.log(leapYear(2000));
// false
console.log(leapYear(2019));
