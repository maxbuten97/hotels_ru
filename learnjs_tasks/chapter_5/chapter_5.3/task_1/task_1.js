/*
Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str
 с заглавным первым символом. Например:
ucFirst("вася") == "Вася"; */

let ucFirst = (str) => {
 let newString = str[0].toUpperCase() + str.slice(1);
  if (!str) {
    return str;
  }
  return newString;
};

console.log(ucFirst("вася"));
