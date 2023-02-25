/*
Что не так с этим тестом?
важность: 5
Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
Ответ: В первой строке должен стоять describe, а перед каждым действием
it с коментарием действия и его выполнение
 */