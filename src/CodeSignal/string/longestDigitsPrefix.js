// Cho một string xuất ra tiền tố dài nhất của nó chỉ chứa các chữ số

function longestDigitsPrefix(s) {
    return s.split(/\D/)[0];
}

console.log(longestDigitsPrefix("123abc1234")); // 123
