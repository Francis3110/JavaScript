// syntax array.sort(function(a,b){})

// if sort function
// nếu giá trị trả về > 0 => sắp xếp a trước b
// nếu giá trị trả về < 0 => sắp xếp b trước a 

const number = [5, 2, 3, 4, 9, 1];
const sort = number.sort(function (a, b) {
  return a - b;
});
console.log(sort);

const employees = [
  { name: 'a', age: 20 },
  { name: 'b', age: 34 },
  { name: 'e', age: 21 },
  { name: 'd', age: 21 },
  { name: 'c', age: 17 },
];

const sortage = employees.sort(function (a, b) {
  return a.age - b.age;
});
console.log(sortage);
