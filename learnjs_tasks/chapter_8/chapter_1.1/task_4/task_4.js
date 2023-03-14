/*
Почему наедаются оба хомяка?
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy);
 оба наследуют от общего объекта hamster.
Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
Ответ: Всё потому, что они наследовали от hamster один желудок, нужно каждому хомяку
дать свой желудок))
*/

let hamster = {

    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    stomach: [],
    __proto__: hamster,
  };
  
  let lazy = {
    stomach: [],
    __proto__: hamster,
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  console.log( lazy.stomach ); // apple