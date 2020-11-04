/**
 * Nhiệm vụ của bạn là tìm phần tử giữa của mảng, nếu nó bao gồm hai phần tử
 * thì thay thế 2 phần tử đó bằng tổng của chúng.
 * @param {number[]} arr
 */
function replaceMiddle(arr) {
  if (arr.length % 2 === 0) {
    arr.splice(
      arr.length / 2 - 1,
      2,
      arr[arr.length / 2 - 1] + arr[arr.length / 2]
    );
  }
  return arr;
}

// [ 7, 2, 7, 10, 7 ]
console.log(replaceMiddle([7, 2, 2, 5, 10, 7]));
