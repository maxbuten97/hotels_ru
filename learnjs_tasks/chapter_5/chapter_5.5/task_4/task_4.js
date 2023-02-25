/*
Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10 */
// Решение

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);

// Альтернатива
// let arr = [5, 2, 1, -10, 8];
// function compareNumeric(a, b) {
//   if (a > b) return -1;
//   if (a == b) return 0;
//   if (a < b) return 1;
// }
// console.log(arr.sort(compareNumeric));
