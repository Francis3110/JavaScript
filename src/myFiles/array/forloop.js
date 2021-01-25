
const employ = [
  { name: 'messi', age: 33 },
  { name: 'cr7', age: 36 },
  { name: 'M10', age: 21 },
];

// for (const i of employ) {
//     console.log(i.name,i.age);
// }
// for of
// eslint-disable-next-line no-restricted-syntax
for (const key in employ) {
  if (Object.prototype.hasOwnProperty.call(employ, key)) {
    const element = employ[key];
    console.log(key,element);
  }
}
