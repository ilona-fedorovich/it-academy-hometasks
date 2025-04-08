// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить 
// на экран.

function getNum() {

    let promise = new Promise(function(resolve) {
        setTimeout(() => resolve(Math.floor((Math.random() * (5 - 1 + 1)) + 1)), 3000);
      });
    
      promise.then(
        result => console.log(result)) /* Вывела результат применения функции с мас рандомом для наглядности работы следующей функции с возведением в квадрат*/
        return promise;
      }


  async function getLelele() {
    let nums = await getNum();
    let pow = Math.pow(nums, 2);
    console.log(pow);
  }

  getLelele()