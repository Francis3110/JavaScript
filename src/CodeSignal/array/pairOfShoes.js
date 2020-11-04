/**
 * Hôm qua bạn tìm thấy một số đôi giày ở phía sau tủ quần áo của bạn.
 * Mỗi chiếc giày được mô tả bởi hai giá trị: type cho biết đó là chiếc giày
 * bên trái hay bên phải, size là kích thước của giày.
 * Nhiệm vụ của bạn là kiểm tra xem có thể ghép tất cả đôi giày bạn tìm thấy
 * theo cách sao cho mỗi đôi bao gồm một chiếc bên phải và một chiếc bên trái
 * có kích thước bằng nhau.
 * @param {number[][]} shoes
 */

function pairOfShoes(shoes) {
  const pairs = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const shoe of shoes) {
    const [type, size] = shoe;
    if (pairs[size] === undefined) {
      pairs[size] = 0;
    }
    if (type) {
      pairs[size]++;
    } else {
      pairs[size]--;
    }
  }
  return Object.values(pairs).every((elm) => elm === 0);
}

// true
console.log(
  pairOfShoes([
    [0, 21],
    [1, 23],
    [1, 21],
    [0, 23],
  ])
);

// false
console.log(
  pairOfShoes([
    [0, 20],
    [1, 25],
    [1, 20],
    [0, 20],
  ])
);
