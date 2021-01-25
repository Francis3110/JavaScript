// function allLongestStrings(inputArray) {
//   const newarr = [];

//   if (inputArray.length === 1) {
//     return inputArray;
//   }
//   // eslint-disable-next-line func-names
//   const longestWord = inputArray.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   for (let i = 0; i < longestWord.length; i++) {
//     if (longestWord[i] > longestWord[i + 1]) {
//       newarr.push(longestWord[i]);
//     }
//   }

//   return newarr;
// }

const allLongestStrings = (arrayOfStrings) => {
  const maxLng = Math.max(...arrayOfStrings.map((elem) => elem.length));
  return arrayOfStrings.filter((elem) => elem.length === maxLng);
};

const arrayOfStrings = ['aba', 'aa', 'ad', 'vcd', 'aba','ahahh'];

console.log(allLongestStrings(arrayOfStrings));
