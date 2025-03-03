/* 6. Дан массив [3, 4, 1, 2, 7. 30. 50]. Отсортируйте его */

let numbers = [3, 4, 1, 2, 7, 30, 50];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
