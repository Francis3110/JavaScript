// Xuất ra một chuỗi con của chuỗi đã cho với điểm bắt đầu và độ dài.

function mySubstringByLength(inputString, start, length) {
    return inputString.substr(start, length);
}

console.log(mySubstringByLength("00Nihta00", 2, 5));
