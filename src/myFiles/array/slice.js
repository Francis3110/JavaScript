// copy Phương thức slice() trả về một bản sao tham chiếu (shallow copy)
// một phần của một mảng dưới dạng một mảng mới nhận các giá trị có chỉ số từ 
// begin dến end (không bao gồm end). Mảng ban đầu không bị thay đổi.
const arr = [1,23,3,7,2,2];
console.log(arr.slice(0,4));