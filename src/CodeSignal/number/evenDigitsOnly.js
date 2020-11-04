/**
 * Kiểm tra tất cả các chữ số của số nguyên cho trước là số chẵn
 * @param {number} n
 */

function evenDigitsOnly(n) {
  // eslint-disable-next-line no-restricted-syntax
  for (const iterator of n.toString()) {
    if (iterator % 2 !== 0) {
      return false;
    }
  }
  return true;
}

const evenDigitsOnly2 = (n) => /^[02468]+$/.test(n);

// True
console.log(evenDigitsOnly(20468));
console.log(evenDigitsOnly2(20468));

// False
console.log(evenDigitsOnly(20469));
console.log(evenDigitsOnly2(20469));
