/* eslint-disable no-var */
// syntax same map
// return true or false

// var numbers = [-3, -2, -1, 1, 2, 3, 4];
// var evennumber = numbers.filter(function (x) {
//   return x > 0 && x % 2 === 0;
// });
// console.log(evennumber);

// lọc ra phần tử có nội dung thỏa chuỗi tìm kiếm

const fruits = ['apple', 'banana', 'orange', 'carrot'];

function filterItem(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase(query)) > -1;
  });
}
console.log(filterItem('ap'));

// ES 215
function filterItem(q) {
  return (fruits.filter = (el) => {
        return el.toLowerCase().indexOf(toLowerCase(q)) > -1
  });
}
