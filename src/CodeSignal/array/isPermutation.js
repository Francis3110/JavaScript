/**
 * Cho một mảng, kiểm tra xem nó có phải là hoán vị của các số từ một đến n
 * hay không ?
 * @param {number} n
 * @param {number[]} arr
 */

function isPermutation(n, arr) {
  const hash = {};
  // eslint-disable-next-line no-return-assign
  arr.forEach((elm) => (hash[elm] = true));
  // eslint-disable-next-line no-param-reassign
  return arr.every(() => hash[n--]);
}

console.log(isPermutation(6, [1, 4, 3, 6, 5, 2])); // true
