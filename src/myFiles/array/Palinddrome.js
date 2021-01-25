
// eslint-disable-next-line no-unused-vars
function checkPalindrome(str) {
    let l = str.length;
    for (let i = 0; i < l/2; i++) {
     if (str[i] !== str[l - 1 - i]) {
      return false;
     }
    }
    return true;
   };
// eslint-disable-next-line no-unused-vars
console.log(checkPalindrome('lllfllkl'));