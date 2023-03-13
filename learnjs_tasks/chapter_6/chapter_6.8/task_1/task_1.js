/*
Вывод каждую секунду
Напишите функцию printNumbers(from, to),
 которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

/*
SetInterval:
let printNumbers = (from, to) => {
  let current = from;
  let timerId = setInterval(() => {
    console.log(current);
    if (current == to) {
      clearTimeout(timerId);
    }
    current++;
  }, 1000);
};
printNumbers(5, 10); */

let printNumbers = (from, to) => {
  let current = from;
  let timerId = setTimeout(function tick() {
    console.log(current);
    timerId = setTimeout(tick, 1000);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
};
printNumbers(5, 10);
