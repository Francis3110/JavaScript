/**
 * Kiểm tra một string có phải là một địa chỉ MAC-48 hay không?
 * Định dạng chuẩn (IEEE 802) để in địa chỉ MAC-48 ở dạng thân thiện với
 * con người là sáu nhóm gồm hai chữ số hexadecimal (0 đến 9 hoặc A đến F),
 * được phân tách bằng dấu gạch nối.
 * Ví dụ: 01-23-45-67-89-AB.
 * @param {string} str
 */

function isMAC48Address(str) {
  return /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(str.toUpperCase());
}

// true
console.log(isMAC48Address('00-99-FF-FA-9F-A0'));
// false
console.log(isMAC48Address('Z1-1B-63-84-45-E6'));
