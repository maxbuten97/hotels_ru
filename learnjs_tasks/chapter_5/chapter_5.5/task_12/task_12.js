/*
Оставить уникальные элементы массива
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:

function unique(arr) {
  /* ваш код 
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O */

let unique = (arr) => {
  let res = [];
  for (item of arr) {
    if (!res.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O", ];

console.log(unique(strings)); // кришна, харе, :-O
