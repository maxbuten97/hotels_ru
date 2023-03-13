/*
Функция в if
Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); */
/*
Ответ: Ошибка, тк alert вызывается внутри if и не может вызываться глобально */