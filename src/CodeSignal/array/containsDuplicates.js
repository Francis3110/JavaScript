/**
 * Viết hàm kiểm tra trong mảng có phần tử nào lặp lại hay không ?
 * Nếu lặp lại return true
 * @param {number[]} arr
 */

function containsDuplicates(arr) {
  const isExist = {};
  for (let i = 0; i < arr.length; i++) {
    if (!isExist[arr[i]]) {
      isExist[arr[i]] = true;
    } else {
      return true;
    }
  }
  return false;
}

// true
console.log(containsDuplicates([1, 2, 3, 1, 4, 5]));
// false
console.log(containsDuplicates([1, 2, 3, 4, 5]));
