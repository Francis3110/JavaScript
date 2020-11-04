/* eslint-disable no-param-reassign */
/**
 * Tìm số nguyên nhỏ nhất không nhỏ hơn giới hạn đã cho (start) chia hết cho
 * tất cả các số nguyên từ mảng đã cho.
 * @param {number[]} divisors
 * @param {number} start
 */

function firstMultiple(divisors, start) {
  return divisors.some((i) => start % i !== 0)
    ? firstMultiple(divisors, ++start)
    : start;
}

// Phương thức some() kiểm tra xem có ít nhất một phần tử của mảng thoả điều kiện ở hàm được truyền vào hay không.

// 24
console.log(firstMultiple([4, 2, 3], 13));
