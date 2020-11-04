// PEP 8 yêu cầu một lập trình viên viết các dòng không quá 79 ký tự.
// Cho một dòng mã, tìm hiểu xem nó có thỏa mãn các yêu cầu PEP 8 không.

function pepEight2(line) {
    return line.length < 80;
}

function pepEight22(line) {
    return !line[79];
}

console.log(pepEight2("console.log('HELLO WORLD')"));
console.log(pepEight22("console.log('HELLO WORLD')"));
