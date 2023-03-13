/*
Вопрос о соседях
Если elem – произвольный узел DOM-элемента…

1.Правда, что elem.lastChild.nextSibling всегда равен null?
2.Правда, что elem.children[0].previousSibling всегда равен null ? 

Ответ: 
1. Да, у элемента lastChild нет ссылки на nextSibling
2. Нет,  previousSibling  может быть текстовый узел
*/