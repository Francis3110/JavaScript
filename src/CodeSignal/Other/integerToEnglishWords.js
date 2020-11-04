/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
/**
 * Cho một số nguyên không âm n. 0 <= n <= 2147483647
 * Chuyển nó sang dạng tiếng anh tương ứng.
 */

// Hàm có thể chuyển tối đa 999.999.999.999
function integerToEnglishWords(num) {
  if (num === 0) {
    return 'Zero';
  }

  // Các số từ 1 đến 999 (num = 0 thì return "")
  // eslint-disable-next-line no-shadow
  const oneToThousand = (num) => {
    const base1 = ' One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split(
      ' '
    );
    const base2 = 'Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety'.split(
      ' '
    );
    const hundred = (num / 100) | 0;
    const remainder = num % 100;
    let res = hundred !== 0 ? `${base1[hundred]} Hundred ` : '';
    res +=
      remainder < 20
        ? base1[remainder]
        : `${base2[((remainder / 10) | 0) - 2]} ${base1[remainder % 10]}`;
    return res.trim();
  };

  const billion = (num / 1e9) | 0;
  num %= 1e9;
  const million = (num / 1e6) | 0;
  num %= 1e6;
  const thousand = (num / 1000) | 0;
  // eslint-disable-next-line no-multi-assign
  const remainder = (num %= 1000);

  let res = '';
  if (billion !== 0) res += `${oneToThousand(billion)} Billion `;
  if (million !== 0) res += `${oneToThousand(million)} Million `;
  if (thousand !== 0) res += `${oneToThousand(thousand)} Thousand `;
  res += oneToThousand(remainder);

  return res.trim();
}

console.log(integerToEnglishWords(0));
console.log(integerToEnglishWords(123456789));
console.log(integerToEnglishWords(999999999999));
