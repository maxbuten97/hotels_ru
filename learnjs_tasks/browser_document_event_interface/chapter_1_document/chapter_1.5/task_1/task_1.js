/*
Считаем потомков
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ? 

Ответ:
*/
//Найти Текст
for (let li of document.querySelectorAll("li")) {
  console.log(li.firstChild.data);
}
//Найти всех потомков
let li = document.getElementsByTagName("li").length;
console.log(li);
