/*
Тормозящий (throttling) декоратор
Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку,
 передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы,
  которые попадают в период «торможения», игнорируются.

Отличие от debounce – если проигнорированный вызов является последним во
 время «задержки», то он выполняется в конце. */

function f(a) {
  console.log(a);
}

function throttle(func, ms) {
  let isReady = true;
  let tmp;

  return function (...args) {
    tmp = args;
    if (!isReady) return;
    isReady = false;
    func.apply(this, args);
    setTimeout(() => {
      isReady = true;
      func.apply(this, tmp);
    }, ms);
  };
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
