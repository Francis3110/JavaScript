/**
 * Cho một mảng arr, tìm số lớn nhất trong arr là tích của hai phần tử trong arr.
 * Nếu không có hai phần tử trong arr có thể được nhân lên để tạo ra một phần tử
 * khác có trong arr, trả về -1.
 * Ràng buộc: 1 ≤ arr.length ≤ 10e5, 1 ≤ arr[i] ≤ 10e4.
 * @param {number[]} a
 */

function maxPairProduct(a) {
  let arr = [...a].sort((x, y) => x - y);

  // Đếm số lần xuất hiện
  const exist = [];
  arr.forEach((idx) => {
    if (!exist[idx]) exist[idx] = 1;
    else exist[idx]++;
  });

  // Loại bỏ các giá trị trùng lặp
  arr = [...new Set(arr)];

  // Tìm trong arr numFirst, numSecond, product mà:
  // numFirst * numSecond = product
  for (let i = arr.length - 1; i >= 0; i--) {
    const product = arr[i];
    for (let j = 0; j < i && arr[j] <= Math.sqrt(product); j++) {
      const numFirst = arr[j];
      if (product % numFirst === 0) {
        const numSecond = product / numFirst;
        if (exist[numSecond]) {
          // Tránh trường hợp trả về 4 với arr = [2, 4]
          if (numSecond !== numFirst) return product;
          // Trả về 4 với arr = [2, 2, 4]
          if (numSecond === numFirst && exist[numSecond] > 1) return product;
        }
      }
    }
  }

  return -1;
}

// -1
console.log(maxPairProduct([2, 4]));
// 4
console.log(maxPairProduct([2, 2, 4]));
// 30
console.log(maxPairProduct([10, 3, 5, 30, 35]));
// -1
console.log(maxPairProduct([2, 5, 7, 8]));
