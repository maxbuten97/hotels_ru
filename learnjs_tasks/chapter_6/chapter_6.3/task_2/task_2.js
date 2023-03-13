/*
Объект счётчика
Здесь объект счётчика создан с помощью функции-конструктора.
Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}
let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ? */

//Ответ: Будет работать, тк они имеют доступ к одной переменной count,
// c одним лексическим окружением