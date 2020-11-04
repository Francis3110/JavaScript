/**
 * Cho một mảng số nguyên được sắp xếp không chứa bất kỳ bản sao nào,
 * trả về một bản tóm tắt về phạm vi số mà nó chứa.
 * @param {number[]} nums
 */

function composeRanges(nums) {
  const size = nums.length;

  if (size === 0) {
    return [];
  }

  const res = [];
  let start = nums[0];
  let end = start;

  for (let i = 1; i < size; i++) {
    const elm = nums[i];
    if (end === elm - 1) {
      end = elm;
    } else {
      res.push(start === end ? `${start}` : `${start}->${end}`);
      if (i + 1 < size) {
        start = nums[i];
        end = start;
      } else {
        res.push(`${nums[i]}`);
        return res;
      }
    }
  }

  res.push(start === end ? `${start}` : `${start}->${end}`);

  return res;
}

// []
console.log(composeRanges([]));
// ["1"]
console.log(composeRanges([1]));
// ["1", "9"]
console.log(composeRanges([1, 9]));
// ["1->2"]
console.log(composeRanges([1, 2]));
// ["-1->2", "6->7", "9"]
console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
