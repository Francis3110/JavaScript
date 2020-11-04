/**
 * Thay thế tất cả phần tử elemToReplace bằng phần tử substitutionElem
 * @param {number[]} arr
 * @param {number} elemToReplace
 * @param {number} substitutionElem
 */

function arrayReplace(arr, elemToReplace, substitutionElem) {
  return arr.map((x) => (x === elemToReplace ? substitutionElem : x));
}

const arr = [1, 2, 3, 4, 5, 1, 1, 1, 1];
console.log(arrayReplace(arr, 1, 0));
