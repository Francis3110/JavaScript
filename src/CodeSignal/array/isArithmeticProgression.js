/**
 * Cho một mảng kiểm tra xem tất cả các phần tử trong mảng có cách đều nhau
 * hay không?
 * @param {number[]} sequence
 */

function isArithmeticProgression(sequence) {
  const difference = sequence[1] - sequence[0];
  return sequence.every((val, i, arr) =>
    i > 0 ? val - arr[i - 1] === difference : true
  );
}

// true
console.log(isArithmeticProgression([1, 3, 5, 7, 9]));
// false
console.log(isArithmeticProgression([2, 4, 8, 16, 32]));
