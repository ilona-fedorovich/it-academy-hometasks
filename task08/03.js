// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Используйте также функцию getNum, чтобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
// Создайте async функцию, которая с помощью await будет дожидаться результата функции, затем будет дожидаться результата второй 
// функции, а затем найдет сумму полученных чисел и выводит на экран.


function getNum() {

    const promise = new Promise(function(resolve) {
        setTimeout(() => resolve(Math.floor((Math.random() * (5 - 1 + 1)) + 1)), 3000);
      });
      promise.then(
        result => console.log(result)) /* Вывела результат применения функции с мас рандомом для наглядности работы*/
        return (promise);
      }

      function getNum2() {

         const promise2 = new Promise(function(resolve) {
            setTimeout(() => resolve(Math.floor((Math.random() * (10 - 6 + 1)) + 6)), 5000);
          });
          promise2.then(
            result => console.log(result));   /* Вывела результат применения функции с мас рандомом для наглядности работы*/ 
            return (promise2);
          }


          async function sumNumbs() {
            let n1 = await getNum();
            let n2 = await getNum2()
            let arr3 = await Promise.allSettled([n1, n2]);/* Можно было и через метод all, но решила, пусть будет виден статус со значением*/
            let n4 = n1+n2;
            console.log(arr3, `\nСумма чисел = ${n4}`);
        
        }

        sumNumbs()