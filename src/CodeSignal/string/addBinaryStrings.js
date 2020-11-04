/**
 * Cho hai chuỗi nhị phân a và b: 0 ≤ a.length, b.length ≤ 10e5
 * cộng chúng lại với nhau và trả về chuỗi kết quả
 */

function addBinaryStrings(a, b) {
    let idxA = a.length - 1;
    let idxB = b.length - 1;
    let isOver = false;
    let ret = [];
    while (idxA >= 0 || idxB >= 0 || isOver) {
        const valueA = idxA >= 0 ? ~~a[idxA] : 0;
        const valueB = idxB >= 0 ? ~~b[idxB] : 0;
        let sum = valueA + valueB + (isOver ? 1 : 0);
        if (sum > 1) {
            isOver = true
            sum -= 2;
        } else isOver = false;
        ret.unshift(sum);
        idxA--, idxB--;
    }
    return ret.join('');
}

// '1111'
console.log(
    addBinaryStrings(
        '1000',
        '111'
    )
);

// '10100'
console.log(
    addBinaryStrings(
        '1101',
        '111'
    )
);
