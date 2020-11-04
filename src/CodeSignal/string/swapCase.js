// Thay đổi cách viết hoa các chữ cái của một string cho trước

function swapCase(text) {
    return text.replace(/./g, c =>
        c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase());
}

console.log(swapCase("aBcdEfgH"));
