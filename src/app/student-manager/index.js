/* eslint-disable no-undef */

// let student = [];
// // eslint-disable-next-line no-unused-vars
// function loadData() {
//   // eslint-disable-next-line prefer-const
//   let fileContent = fs.readlineSync('./data.json');
//   student = JSON.parse(fileContent);
// }
// function showMenu() {
//   console.log('1. Show all student');
//   console.log('2. Create a new student');
//   console.log('3. Save & Exit');
// }

// // eslint-disable-next-line no-unused-vars
// function main() {
//   showMenu();
//   // eslint-disable-next-line no-undef
//   console.log(student);

// //   const option = readlineSync.question('>');
// //   switch (option) {
// //     case '1':
// //       showAllStudent();
// //       break;
// //     case '2':
// //       createStudent();
// //       break;
// //     case '2':
// //       saveAndExit();
// //       break;

// //     default:
// //       break;
// //   }
// }

// const readlineSync = require('readline-sync');
// const fs = require('fs');

// const data = {};
// data.students = [];

// while (true) {
//   const options = readlineSync.question('what is your option?');
//   if (options === 1) {
//     console.log(fs.readFileSync('./data.json', { encoding: 'utf8' }));
//   }
//   if (options === 2) {
//     const myClassmates = {};

//     myClassmates.name = readlineSync.question('name?');
//     myClassmates.gender = readlineSync.question('gender?');
//     myClassmates.age = readlineSync.question('age?');
//     myClassmates.grade = readlineSync.question('grade?');

//     data.students.push(myClassmates);
//     fs.writeFileSync('./data.json', JSON.stringify(data));
//   }
//   if (options === 3) {
    
//     break;
//   }
// }

/* 
    danh sách sinh viên
    menu : hiển thị sinh viên 
    thêm sinh viên 
 */