/**
 * Cho một mảng gồm các phần tử riêng biệt, tìm phần tử lớn hơn tiếp theo cho
 * mỗi phần tử của mảng, tức là phần tử đầu tiên bên phải lớn hơn phần tử này,
 * theo thứ tự xuất hiện trong mảng và trả về kết quả như một mảng mới có cùng
 * Kích thước. Nếu một phần tử không có phần tử lớn hơn ở bên phải,
 * hãy đặt -1 vào ô thích hợp của mảng kết quả.
 * @param {number[]} arr
 */

function nextLarger(arr) {
  const ret = new Array(arr.length).fill(-1);
  for (let i = arr.length - 2; i >= 0; i--) {
    const iVal = arr[i];
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[x] > iVal) {
        ret[i] = arr[x];
        break;
      }
    }
  }
  return ret;
}

// [7, 8, 8, -1]
console.log(nextLarger([6, 7, 3, 8]));
// [7, 7, -1, 4, 4, 4, 5, -1]
console.log(nextLarger([6, 2, 7, 3, 1, 0, 4, 5]));
