/* eslint-disable no-var */
//

// eslint-disable-next-line no-var
// var numbers = [1, 2, 3, 4];
// // eslint-disable-next-line no-var
// var rd = numbers.reduce(function (a, b) {
//   console.log(a, b);
//   return a + b;
// });
// console.log(rd);





// eslint-disable-next-line vars-on-top
var oder = [
  { name: 'A', quantity: 4, price: 100 },
  { name: 'B', quantity: 7, price: 300 },
  { name: 'C', quantity: 9, price: 500 },
];

// reduce tổng đơn hàng
// eslint-disable-next-line func-names
// eslint-disable-next-line no-shadow
const total = oder.reduce(function(current,oder){
        
      return current + oder.price*oder.quantity;
},0);

console.log(total);
//
// eslint-disable-next-line no-unused-vars
const items = ['tom','bill','kim'];
// result = '<tom><bill><kim>'



// eslint-disable-next-line vars-on-top

// eslint-disable-next-line vars-on-top
// var sum = oder.map(function (x) {
//   return x.quantity * x.price;
// });
// // eslint-disable-next-line vars-on-top
// var t = sum.reduce(function (a, b) {
//   return a + b;
// });
// console.log('sum: ', t);



