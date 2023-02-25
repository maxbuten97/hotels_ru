/*
Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку
 на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
 */

let camelize = (str) => {
  return str
    .split("-")
    .map((word, index) => {
      if (index == 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join("");
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
