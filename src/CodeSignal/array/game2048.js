/* eslint-disable no-shadow */
/** *
 * Cho lưới sudoku 4 x 4 và mảng path gồm các kí tự U, D, L, R tương ứng Up, Down,
 * Left, Right. Giả sử mỗi lượt đi không random ra số 2 hoặc 4, trả về
 * lưới 2048 sau khi di chuyển theo (path).
 * @param {number[][]} grid
 * @param {string} path
 */

function game2048(grid, path) {
  let res = JSON.parse(JSON.stringify(grid));

  const empty = () => {
    return [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  };

  const pairing = (a) => {
    const arr = [...a];
    for (let i = arr.length - 1; i > 0; i--)
      if (arr[i] === arr[i - 1]) {
        arr[i] *= 2;
        arr[i - 1] = 0;
      }
    return arr.filter((elm) => elm !== 0);
  };

  const down = (grid) => {
    const res = empty();

    for (let col = 0; col < 4; col++) {
      let arr = [];
      for (let row = 0; row < 4; row++)
        if (grid[row][col] !== 0) arr.push(grid[row][col]);
      let row = 3;
      arr = pairing(arr);
      while (arr.length !== 0) res[row--][col] = arr.pop();
    }

    return res;
  };

  const up = (grid) => {
    const res = empty();

    for (let col = 0; col < 4; col++) {
      let arr = [];
      for (let row = 3; row >= 0; row--)
        if (grid[row][col] !== 0) arr.push(grid[row][col]);
      let row = 0;
      arr = pairing(arr);
      while (arr.length !== 0) res[row++][col] = arr.pop();
    }
    return res;
  };

  const left = (grid) => {
    const res = empty();
    for (let row = 0; row < 4; row++) {
      let arr = [];
      for (let col = 3; col >= 0; col--)
        if (grid[row][col] !== 0) arr.push(grid[row][col]);
      let col = 0;
      arr = pairing(arr);
      while (arr.length !== 0) res[row][col++] = arr.pop();
    }
    return res;
  };

  const right = (grid) => {
    const res = empty();
    for (let row = 0; row < 4; row++) {
      let arr = [];
      for (let col = 0; col < 4; col++)
        if (grid[row][col] !== 0) arr.push(grid[row][col]);
      let col = 3;
      arr = pairing(arr);
      while (arr.length !== 0) res[row][col--] = arr.pop();
    }
    return res;
  };

  for (let i = 0; i < path.length; i++) {
    const key = path.charAt(i);
    // eslint-disable-next-line default-case
    switch (key) {
      case 'D':
        res = down(grid);
        break;
      case 'U':
        res = up(grid);
        break;
      case 'L':
        res = left(grid);
        break;
      case 'R':
        res = right(grid);
        break;
    }
  }

  return res;
}

console.table(
  game2048(
    [
      [2, 0, 0, 2],
      [0, 0, 0, 0],
      [0, 8, 8, 0],
      [0, 4, 8, 0],
    ],
    'L'
  )
);
