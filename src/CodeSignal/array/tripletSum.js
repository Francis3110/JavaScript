/**
 * Cho mảng arr có n phần tử
 * xác định xem trong a có chứa ba phần tử mà tổng nó đúng bằng x hay không?
 * @param {number} x
 * @param {number[]} arr
 */

function tripletSum(x, arr) {
  return arr
    .sort((a, b) => a - b)
    .some((elm, idx) => {
      let left = idx + 1;
      let right = arr.length - 1;

      while (left < right) {
        const diff = x - elm;
        const sumLR = arr[left] + arr[right];
        if (diff === sumLR) return true;
        if (diff < sumLR) right--;
        else left++;
      }

      return false;
    });
}

// true
console.log(
  tripletSum(165, [
    142,
    712,
    254,
    869,
    548,
    645,
    663,
    758,
    38,
    860,
    724,
    742,
    530,
    779,
    317,
    36,
    191,
    843,
    289,
    107,
    41,
    943,
    265,
    649,
    447,
    806,
    891,
    730,
    371,
    351,
    7,
    102,
    394,
    549,
    630,
    624,
    85,
    955,
    757,
    841,
    967,
    377,
    932,
    309,
    945,
    440,
    627,
    324,
    538,
    539,
    119,
    83,
    930,
    542,
    834,
    116,
    640,
    659,
    705,
    931,
    978,
    307,
    674,
    387,
    22,
    746,
    925,
    73,
    271,
    830,
    778,
    574,
    98,
    513,
  ])
);
