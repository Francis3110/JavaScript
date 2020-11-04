/**
 * Bạn là một người thích chơi ô chữ, và cuối cùng đã quyết định thử và tạo ra một ô chữ của riêng bạn.
 * Bạn đưa ra một bộ quy tắc:
 *    1. Ô chữ chứa chính xác bốn từ
 *    2. Bốn từ này sẽ tạo thành bốn cặp giao điểm
 *    3. Tất cả các từ phải được viết từ trái sang phải hoặc từ trên xuống dưới
 *    4. Diện tích của hình chữ nhật được hình thành bởi các ô trống bên trong
 *       các giao điểm không bằng 0. (*)
 *
 * Cho 4 từ, tìm số cách tạo ô chữ theo các quy tắc được mô tả ở trên.
 *
 *       f                         f                             f
 *       o                     c r o s s w o r d     c r o s s w o r d
 *     c r o s s w o r d           r   o                   q     r
 *       m   q                     m   m                   u     m
 *       a   u               s q u a r e                   a     a
 *       t   a                     t   t                   r     t
 *       i   r                     i   h             s o m e t h i n g
 *     s o m e t h i n g           o   i                         o
 *       n                         n   n                         n
 *                                     g
 *
 *         c         s               s
 *     f o r m a t i o n       c     q               c         s
 *         o         m         r     u               r         o
 *         s q u a r e       f o r m a t i o n       o         m
 *         s         t         s     r               s q u a r e
 *         w         h         s o m e t h i n g     s         t
 *         o         i         w                     w         h
 *         r         n         o                   f o r m a t i o n
 *         d         g         r                     r         n
 *                             d                     d         g
 *
 * ************************************************************************** */



/*
 *              B        D
 *              |        |
 *              | b1     | d1
 *      A ------a1-------a2------
 *              |        |
 *              |        |
 *              | b2     | d2
 *      C ------c1-------c2------
 *              |        |
 *              |        |
*/

// Thử tất cả các đặt 4 từ
// Trường hợp thỏa mãn là trường hợp mà
// các cặp kí tự (a1, b1), (a2, d1), (c1, b2), (c2, d2) giống nhau
function count(a, b, c, d) {
    let count = 0;
    for (let a1 = 0; a1 < a.length; a1++)
        for (let a2 = a1 + 2; a2 < a.length; a2++) // a2 = a1 + 2 để thỏa mãn (*)
            for (let b1 = 0; b1 < b.length; b1++)
                for (let b2 = b1 + 2; b2 < b.length; b2++)
                    for (let c1 = 0; c1 < c.length; c1++)
                        for (let d1 = 0; d1 < d.length; d1++) {
                            const c2 = c1 + (a2 - a1), d2 = d1 + (b2 - b1);
                            if (c2 < c.length && d2 < d.length)
                                if (a[a1] == b[b1] && a[a2] == d[d1] && c[c1] == b[b2] && c[c2] == d[d2])
                                    count++;
                        }
    return count;

}

function crosswordFormation(words) {
    // Đặt 4 từ vào 4 vị trí và tìm số cách xếp tạo ra ô chữ thỏa mãn quy tắc
    let ret = 0;
    for (let i = 0; i < words.length; i++)
        for (let j = 0; j < words.length; j++)
            for (let x = 0; x < words.length; x++)
                for (let y = 0; y < words.length; y++)
                    if (i != j && i != x && i != y && j != x && j != y && x != y)
                        ret += count(words[i], words[j], words[x], words[y]);
    return ret;
}

// 6
console.log(crosswordFormation([
    "crossword",
    "square",
    "formation",
    "something"
]));
