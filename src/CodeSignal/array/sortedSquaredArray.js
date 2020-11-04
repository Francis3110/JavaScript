/**
 * Bạn có một mảng các số nguyên được sắp xếp. Viết hàm trả về một mảng đã sắp
 * xếp chứa bình phương của các số nguyên đó.
 * @param {number[]} array
 */
function sortedSquaredArray(array) {
  let mark = array.length;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > 0) {
      mark = i;
      break;
    }
  }

  const res = [];
  let nega = mark - 1;
  let pos = mark;
  while (nega >= 0 && pos < array.length) {
    if (Math.abs(array[nega]) < array[pos]) {
      res.push(array[nega--] ** 2);
    } else {
      res.push(array[pos++] ** 2);
    }
  }
  while (nega >= 0) {
    res.push(array[nega--] ** 2);
  }
  while (pos < array.length) {
    res.push(array[pos++] ** 2);
  }

  return res;
}

// [1, 4, 9, 16, 25, 36]
console.log(sortedSquaredArray([-6, -4, 1, 2, 3, 5]));
// [1, 4, 9]
console.log(sortedSquaredArray([1, 2, 3]));
// [1, ,4, 9]
console.log(sortedSquaredArray([-3, -2, -1]));
