/*
Добавить функциям метод "f.defer(ms)"
Добавьте всем функциям в прототип метод defer(ms), который
 вызывает функции через ms миллисекунд.
*/

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

console.log(f.defer(1000));
