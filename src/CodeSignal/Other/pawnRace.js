/**
 * https://app.codesignal.com/arcade/code-arcade/chess-tavern/
 * ...
 * Mục đích của trò chơi là đến hàng thứ 1 (cho người cầm tốt đen) hoặc
 * hàng thứ 8 (cho người cầm tốt trắng) hoặc để bắt được con tốt của đối phương.
 * Cho các vị trí ban đầu và đến lượt chơi của người, xác định ai sẽ giành
 * chiến thắng hoặc tuyên bố đó là một trận hòa (tức là không thể có bất kỳ
 * người chơi nào giành chiến thắng). Giả sử rằng các người chơi tối ưu.
 * Xem: pawnRace.png
 */

/**
 * Trả về mảng vị trí mà con tốt ở pos có thể tấn công
 * @param {object} pos
 * @param {string} color
 */
function pawnAttack(pos, color) {
  return [
    {
      x: pos.x - 1,
      y: color === 'w' ? pos.y + 1 : pos.y - 1,
    },
    {
      x: pos.x + 1,
      y: color === 'w' ? pos.y + 1 : pos.y - 1,
    },
  ];
}

/**
 * @param {string} w
 * @param {string} b
 * @param {string} toMove
 */
function pawnRace(w, b, toMove) {
  const white = {
    x: w.charCodeAt(0),
    y: w.charCodeAt(1),
  };

  const black = {
    x: b.charCodeAt(0),
    y: b.charCodeAt(1),
  };

  // Đua =)
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // Trường hợp hòa
    // Lưu ý: 2 con tốt cùng một cột chưa chắc đã hòa
    if (white.x === black.x && white.y + 1 === black.y) {
      return 'draw';
    }

    if (toMove === 'w') {
      // Nếu như tốt trắng có thể về đích hoặc ăn được tốt đen
      const whiteCanAttack = pawnAttack(white, 'w');
      if (
        white.y === 55 ||
        JSON.stringify(whiteCanAttack[0]) === JSON.stringify(black) ||
        JSON.stringify(whiteCanAttack[1]) === JSON.stringify(black)
      ) {
        return 'white';
      }

      // Nếu tốt trắng đang ở vị trí mà nó thể lựa chọn di chuyển 1 hoặc 2 ô
      if (white.y === 50) {
        // Những vị trí mà đi vào đó sẽ bị tốt đen ăn
        const danger = pawnAttack(black, 'b');

        // Vị trí mà giả sử tốt đi chuyển 2 ô
        const expecPos = {
          x: white.x,
          y: white.y,
        };
        expecPos.y += 2;

        // Nếu di chuyển 2 ô mà không bị tốt đen ăn hoặc không bị cản bởi tốt đen
        if (
          JSON.stringify(expecPos) !== JSON.stringify(danger[0]) &&
          JSON.stringify(expecPos) !== JSON.stringify(danger[1]) &&
          JSON.stringify(expecPos) !== JSON.stringify(black)
        ) {
          white.y += 2;
        } else {
          white.y += 1;
        }
      }
      // Trường hợp tốt trắng chỉ có thể di chuyển thêm 1 ô
      else {
        white.y += 1;
      }
    } else {
      const blackCanAttack = pawnAttack(black, 'b');
      if (
        black.y === 50 ||
        JSON.stringify(blackCanAttack[0]) === JSON.stringify(white) ||
        JSON.stringify(blackCanAttack[1]) === JSON.stringify(white)
      ) {
        return 'black';
      }
      if (black.y === 55) {
        const danger = pawnAttack(white, 'w');
        const expecPos = {
          x: black.x,
          y: black.y,
        };
        expecPos.y -= 2;
        if (
          JSON.stringify(expecPos) !== JSON.stringify(danger[0]) &&
          JSON.stringify(expecPos) !== JSON.stringify(danger[1]) &&
          JSON.stringify(expecPos) !== JSON.stringify(white)
        ) {
          black.y -= 2;
        } else {
          black.y -= 1;
        }
      } else {
        black.y -= 1;
      }
    }
    // Đổi lượt di chuyển
    // eslint-disable-next-line no-param-reassign
    toMove = toMove === 'w' ? 'b' : 'w';
  }
}

// draw
console.log(pawnRace('c5', 'c7', 'b'));
// draw
console.log(pawnRace('e2', 'e7', 'w'));
// black
console.log(pawnRace('e3', 'd4', 'b'));
// black
console.log(pawnRace('c5', 'b7', 'w'));
// white
console.log(pawnRace('h4', 'g7', 'w'));
// black
console.log(pawnRace('h3', 'g6', 'b'));
