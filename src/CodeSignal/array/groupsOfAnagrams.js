/**
 * Chúng ta hãy định nghĩa một nhóm anagram là một danh sách các từ,
 * trong đó với mỗi cặp từ w1 và w2, w1 là một anagram của w2.
 * Cho một danh sách các từ, chia nó thành số nhóm anagram nhỏ nhất có thể và
 * trả về số nhóm đó.
 *
 * Anagram: Chuỗi x là một anagram của chuỗi y nếu người ta có thể lấy y bằng
 * cách sắp xếp lại các chữ cái của x. Ví dụ: các chuỗi "MITE" và "TIME",
 * "BABA" và "AABB" là một anagram, nhưng "ABBAC" và "CAABA" thì không.
 *
 * Ràng buộc:
 *     1 ≤ words.length ≤ 10^5
 *     1 ≤ words[i].length ≤ 10
 * @param {string[]} words
 */

function groupsOfAnagrams(words) {
  const counts = new Set();
  words.forEach((word) => counts.add(word.split('').sort().join()));
  return counts.size;
}

// 4
console.log(
  groupsOfAnagrams(['tea', 'eat', 'apple', 'ate', 'vaja', 'cut', 'java', 'utc'])
);
