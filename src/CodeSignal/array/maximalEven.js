/**
 * Retrun số chẵn lớn nhất từ dãy số nguyên
 * Không có trả về 1
 * @param {number[]} arr
 */

function maximalEven(arr) {
  // Method map nếu số chẵn thì trả về n nếu lẻ trả về 1
  return Math.max(...arr.map((n) => n % 2 || n));
}

// 8
console.log(maximalEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
