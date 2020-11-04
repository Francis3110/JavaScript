/**
 * Cho tọa độ góc trái trên và dưới phải
 * Vẽ hình chữ nhật trên canvas
 * @param {string[][]} canvas
 * @param {number[]} rectangle
 */

function drawRectangle(canvas, rectangle) {
  const res = JSON.parse(JSON.stringify(canvas));

  const [aX, aY, cX, cY] = rectangle;
  const [dX, bY, bX, dY] = rectangle;

  // eslint-disable-next-line no-multi-assign
  res[aY][aX] = res[bY][bX] = res[cY][cX] = res[dY][dX] = '*';

  // AB
  for (let i = aX + 1; i < bX; i++) {
    res[aY][i] = '-';
  }

  // DC
  for (let i = dX + 1; i < cX; i++) {
    res[dY][i] = '-';
  }

  // BC
  for (let i = bY + 1; i < cY; i++) {
    res[i][bX] = '|';
  }

  // AD
  for (let i = aY + 1; i < dY; i++) {
    res[i][aX] = '|';
  }

  return res;
}

/**
 * [["a","a","a","a","a","a","a","a"],
 *  ["a","*","-","-","*","a","a","a"],
 *  ["a","|","a","a","|","a","a","a"],
 *  ["b","*","-","-","*","b","b","b"],
 *  ["b","b","b","b","b","b","b","b"]]
 */
const res = drawRectangle(
  [
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ],
  [1, 1, 4, 3]
);

// eslint-disable-next-line no-restricted-syntax
for (const row of res) {
  console.log(row.join(' '));
}
