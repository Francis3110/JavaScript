/**
 * Happy number là một số được xác định theo quy trình sau: Bắt đầu với bất kỳ
 * số nguyên dương nào và thay thế số đó bằng tổng bình phương của các chữ số
 * của nó. Lặp lại quy trình này cho đến khi số bằng 1, tại đó nó sẽ ở lại 1
 * hoặc nó lặp lại vô tận trong một chu kỳ không bao gồm 1. Một số mà quá trình
 * này kết thúc bằng 1 là happy. Viết một thuật toán để xác định xem một số có
 * happy hay không.
 * Constraints: 1 ≤ n ≤ 2^31 - 1
 * @param {number} n
 */

function happyNumber(n) {
  let nTypeString = String(n);
  const hash = [nTypeString];
  while (nTypeString !== '1') {
    let newN = 0;
    for (let i = 0; i < nTypeString.length; i++) {
      newN += nTypeString[i] ** 2;
    }

    if (hash[String(newN)]) {
      return false;
    }

    nTypeString = String(newN);
    hash[nTypeString] = true;
  }
  return true;
}

// true
console.log(happyNumber(19));
// false
console.log(happyNumber(9));
// false
console.log(happyNumber(34));
