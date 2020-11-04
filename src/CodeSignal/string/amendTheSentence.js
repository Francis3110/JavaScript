/**
 * Ai đó đã quên đặt khoảng trắng giữa các từ khác nhau và vì một lý do nào đó
 * họ viết hoa chữ cái đầu tiên của mỗi từ.
 * Nhiệm vụ của bạn là: đặt một khoảng trống giữa các từ và chuyển đổi chữ hoa
 * thành chữ thường.
*/

// Thay mỗi chữ hoa thành khoảng trắng và chữ thường
// Sau đó xóa khoảng trắng đầu string (nếu có)
function amendTheSentence(s) {
    return s.replace(/[A-Z]/g, m => " " + m.toLowerCase()).trim();
}

// codesignal is awesome
console.log(
    amendTheSentence('CodesignalIsAwesome')
)

// i ei m cy k adsf g m pa
console.log(
    amendTheSentence('iEiMCyKAdsfGMPa')
)
