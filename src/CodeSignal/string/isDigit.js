// Kiểm tra xem character có phải là một số hay không?

function isDigit(symbol) {
    // eslint-disable-next-line yoda
    return '0' <= symbol && symbol <= '9';
}

console.log(isDigit('0'))
