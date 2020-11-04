/**
 * Cho một mảng các số nguyên tìm số lượng inversions mà nó chứa.
 * Hai phần tử tạo thành inversions nếu arr[i] > arr[j] and i < j.
 * @param {number[]} arr
 */

function countInversionsNaive(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) if (arr[i] > arr[j]) res++;
  return res;
}

// 4
console.log(countInversionsNaive([1, 3, 2, 0]));
