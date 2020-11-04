/**
 * Cho hai phần tử đầu tiên của cấp số cộng tìm phần tử thứ n
 * @param {number} element1
 * @param {number} element2
 * @param {number} n
 */

function arithmeticProgression(element1, element2, n) {
  return element1 + (element2 - element1) * (n - 1);
}

// 0
console.log(arithmeticProgression(3, 2, 4));
