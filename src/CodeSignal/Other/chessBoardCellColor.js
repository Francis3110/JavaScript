/**
 * Cho hai ô trên bàn cờ vua tiêu chuẩn, xác định xem chúng có cùng màu hay
 * không?
 * @param {string} cell1
 * @param {string} cell2
 */

function chessBoardCellColor(cell1, cell2) {
  // A C E G là các số lẻ, các ô màu đen là ô có tọa độ x+y là số chẵn
  return (
    (cell1.charCodeAt(0) + +cell1[1]) % 2 ===
    (cell2.charCodeAt(0) + +cell2[1]) % 2
  );
}

// true
console.log(chessBoardCellColor('A1', 'C3'));
// false
console.log(chessBoardCellColor('A1', 'H3'));
