/**
 * Bạn có hai chuỗi s và t. Chuỗi t chỉ chứa các chữ cái duy nhất. Tìm và trả về
 * chuỗi con tối thiểu liên tiếp của s có chứa tất cả các chữ cái từ t. Đảm bảo
 * rằng câu trả lời tồn tại. Nếu có một vài câu trả lời, hãy trả về câu trả lời
 * bắt đầu từ chỉ số nhỏ nhất.
 *
 * Ràng buộc:
 *     s, t chỉ bao gồm những chữ cái tiếng anh viết thường
 *     0 ≤ s.length ≤ 100
 *     0 ≤ t.length ≤ min(26, s.length)
 */
function minSubstringWithAllChars(s, t) {
    if (s.length === 0 || t.length === 0)
        return "";

    // Những kí tự trong t sẽ có giá trị là 1
    let map = new Array(26).fill(0);
    for (let i = 0; i < t.length; i++) map[t.charCodeAt(i) - 97]++;

    let min = Infinity;
    let required = t.length;
    let beginSubStr = indexS = headSubStr = 0;
    while (indexS < s.length) {
        // Nếu gặp một kí tự trong t mà chưa tồn tại trong
        // chuỗi con (s.substring(beginSubStr, indexS+1))
        if (map[s.charCodeAt(indexS++) - 97]-- > 0) {
            required--;
        }

        // Tìm vị trí thích hợp để bắt đầu tìm kiếm chuỗi con mới
        // đồng thời giảm chiều dài chuỗi con thỏa mãn hiện tại tối đa trong
        // khi nó vẫn thỏa mãn yêu cầu
        while (required == 0) {
            const len = indexS - beginSubStr;
            if (len < min) {
                min = len;
                headSubStr = beginSubStr;
            }

            // Nếu như chuỗi con thiếu một kí tự (mà kí tự đó nằm trong t)
            if (map[s.charCodeAt(beginSubStr++) - 97]++ == 0) {
                required++;
            }
        }
    }
    return s.substr(headSubStr, min);
}


// banc
console.log(minSubstringWithAllChars("adobecodebancazbc", "abc"));

// tvdsxcqsnoecca
console.log(minSubstringWithAllChars("tvdsxcqsnoeccaurocnk", "acqt"));
