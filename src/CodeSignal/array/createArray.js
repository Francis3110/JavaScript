/**
 * Trả về mảng gồm size phần tử 1
 * @param {number} size
 * @returns {number[]}
 */

function createArray(size) {
  return Array(size).fill(1);
}

// [1, 1, 1, 1, 1]
console.log(createArray(5));
