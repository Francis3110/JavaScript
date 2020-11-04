/**
 * Cho một mảng các số nguyên, xác định xem có hai chỉ số i và j riêng biệt
 * trong mảng sao cho:
 *     Sự khác biệt tuyệt đối giữa i và j nhiều nhất là k
 *     Sự khác biệt tuyệt đối giữa chữ số [i] và chữ số [j] nhiều nhất là t
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 */

function containsNearbyAlmostDuplicate(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
    }
  }
  return false;
}

console.log(containsNearbyAlmostDuplicate([7, 1, 3], 2, 3));
