// Cho một string, xóa tất cả các khoảng trắng trong nó

function deleteWhitespaces(s) {
    return s.split(' ').join('');
}

console.log(deleteWhitespaces("a   b c  de f gh"));
