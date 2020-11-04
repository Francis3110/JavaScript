/**
 * Kiểm tra một mảng có phải là mảng tăng nghiêm ngặt hoặc giảm nghiêm ngặt hay không?
 * @param {number[]} sequence
 */

function isMonotonous(sequence) {
  return (
    sequence.length === 1 ||
    sequence.every((elm, index) => index === 0 || sequence[index - 1] < elm) ||
    sequence.every((elm, index) => index === 0 || sequence[index - 1] > elm)
  );
}

// true
console.log(isMonotonous([1, 2, 3, 4, 5]));
// true
console.log(isMonotonous([5, 4, 3, 2, 1]));
// false
console.log(isMonotonous([1, 2, 5, 3, 4]));
