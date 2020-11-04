// eslint-disable-next-line no-var
// var number = [1,2,3,4];
// // eslint-disable-next-line no-var
// var squaNumbers = number.map(function(x){
//     return x*3;
// });
// console.log(squaNumbers);

// syntax
// arr.map(function(item){
// return newValue
// });

// eslint-disable-next-line no-var
var rectangles = [
  { width: 10, height: 5 },
  { width: 20, height: 7 },
  { width: 15, height: 9 },
];
// dùng map method để biến đổi biến đổi rectangles
// thành 1 array mới gồm có diện tích của các hình trên

// eslint-disable-next-line no-var
var s = rectangles.map(function (x) {
  return x.height * x.width;
});
console.log('diện tích các hình: ', s);
