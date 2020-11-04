/**
 * Cho một mảng số nguyên được sắp xếp trong đó phạm vi các phần tử là [l, r],
 * trả về phạm vi bên trong bị thiếu của nó.
 * Ràng buộc:
 *     -2^31 - 1 ≤ l ≤ r ≤ 2^31 - 1
 *     0 ≤ nums.length ≤ 10
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 */

function innerRanges(nums, l, r) {
  // Tạo mảng numsNew bao gồm các phần tử (không trùng lặp) nằm trong [l, r]
  const set = new Set();
  nums.forEach((num) => {
    if (l <= num && num <= r) {
      set.add(num);
    }
  });
  const numsNew = [...set];
  const size = numsNew.length;

  if (size === 0) {
    return l === r ? [`${l}`] : [`${l} -> ${r}`];
  }

  const res = [];

  if (l < numsNew[0]) {
    const diff = numsNew[0] - l;
    res.push(diff === 1 ? `${l}` : `${l}->${numsNew[0] - 1}`);
  }

  for (let i = 1; i < size; i++) {
    const diff = numsNew[i] - numsNew[i - 1];
    if (diff !== 1) {
      res.push(
        diff === 2
          ? `${numsNew[i] - 1}`
          : `${numsNew[i - 1] + 1}->${numsNew[i] - 1}`
      );
    }
  }

  if (numsNew[size - 1] < r) {
    const diff = r - numsNew[size - 1];
    res.push(diff === 1 ? `${r}` : `${numsNew[size - 1] + 1}->${r}`);
  }

  return res;
}

// ["1"]
console.log(innerRanges([], 1, 1));
// ["1->5"]
console.log(innerRanges([], 1, 5));
// ["1->5"]
console.log(innerRanges([-4], 1, 5));
// ["-2"]
console.log(innerRanges([-1], -2, -1));
// ["-2", "0"]
console.log(innerRanges([-1, -1], -2, 0));
// ["-4->9", "11", "14->49", "51->88"]
console.log(innerRanges([-5, 10, 12, 13, 50], -5, 88));
