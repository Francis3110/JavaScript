/**
 * Thực hiện một stack được sửa đổi, ngoài việc sử dụng các thao tác push và
 * pop, nó còn cho phép tìm phần tử nhỏ nhất hiện tại trong stack bằng cách sử
 * dụng min
 * @param {string[]} operations
 */

function minimumOnStack(operations) {
  const res = [];
  const mins = [];
  let min;
  operations.forEach((cmd) => {
    if (cmd.length !== 3) {
      // "push xyz"
      const n = parseInt(cmd.slice(5), 10);
      // eslint-disable-next-line no-nested-ternary
      min = !min ? n : min > n ? n : min;
      mins.push(min);
    } else if (cmd === 'pop') {
      // "pop"
      mins.pop();
      min = mins[mins.length - 1];
    } else {
      // "min"
      res.push(min);
    }
  });
  return res;
}

// [10, 5, 5, 5, 10]
console.log(
  minimumOnStack([
    'push 10',
    'min',
    'push 5',
    'min',
    'push 8',
    'min',
    'pop',
    'min',
    'pop',
    'min',
  ])
);
