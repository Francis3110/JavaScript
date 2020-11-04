/**
 * Để chuẩn bị cho học sinh của mình cho một trận đấu sắp tới,
 * huấn luyện viên thể thao quyết định thử một số bài tập huấn mới.
 * Để bắt đầu, anh xếp chúng lại và bắt đầu với bài tập khởi động sau:
 * Khi huấn luyện viên nói 'L', anh ấy hướng dẫn các học sinh rẽ sang trái.
 * Ngoài ra, khi anh ta nói 'R', các học sinh rẽ sang phải.
 * Cuối cùng, khi huấn luyện viên nói 'A', các học sinh nên quay lại.
 * Thật không may, một số học sinh (không phải tất cả, nhưng ít nhất là một)
 * luôn rẽ phải khi nghe 'L' và trái khi họ nghe thấy 'R'.
 * Huấn luyện viên muốn biết số lần các học sinh quay mặt với cùng một hướng.
 * Đưa ra danh sách các lệnh mà huấn luyện viên đã đưa ra, tính số lần học sinh
 * quay mặt cùng một hướng.
 * @param {string} commands
 */

// Mỗi lần quay trái hoặc quay phải: nếu đang quay mặt cùng hướng thì sau khi
// quay sẽ khác hướng và ngược lại
function lineUp(commands) {
  let sameDirection = true;
  let count = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const c of commands) {
    if (c !== 'A') {
      sameDirection = !sameDirection;
    }
    if (sameDirection) {
      count++;
    }
  }

  return count;
}

// 3
console.log(lineUp('LLARL'));
