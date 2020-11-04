/**
 * Cho ba cạng của một tam giác kiểm tra xem nó có phải tam giác vuông hay không?
 * @param {number[]} sides
 */

function rightTriangle(sides) {
  const [a, b, c] = sides.sort((x, y) => x - y);
  return a * a + b * b === c * c;
}

// true
console.log(rightTriangle([3, 5, 4]));
