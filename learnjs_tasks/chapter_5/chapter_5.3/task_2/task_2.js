/*
Проверка на спам
Напишите функцию checkSpam(str), возвращающую true,
 если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

let checkSpam = (str) => {
  let spamStr = str.toLowerCase();
  if (spamStr.includes("viagra") || spamStr.includes("xxx")) {
    return true;
  }
  return false;
};
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
