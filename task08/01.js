// Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout 
// со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.


/*Решение задачи через промисы*/
let promiseOne = new Promise(function(resolve) {
    setTimeout(() => resolve(1), 3000);
  });

  let promiseTwo = new Promise(function(resolve) {
    setTimeout(() => resolve(2), 5000);
  });

  let promiseThree = new Promise(function(resolve) {
    setTimeout(() => resolve(3), 1500);
  });

  Promise.race([promiseOne, promiseTwo, promiseThree])
  .then((value) => {
    console.log(value);
  });

/*Решение задачи через объявление синх. ф-и и внутри объявление тех же промисов*/
  async function getNumber() {
    let promiseOne = new Promise(function(resolve) {
        setTimeout(() => resolve(1), 1000);
      });
    let promiseTwo = new Promise(function(resolve) {
        setTimeout(() => resolve(2), 4000);
      });
    
    let promiseThree = new Promise(function(resolve) {
        setTimeout(() => resolve(3), 2000);
      });
    Promise.race([promiseOne, promiseTwo, promiseThree])
      .then((value) => {
        console.log(value);
      });
  }

  getNumber()

  /* Итого вывожу разными способами 2 цифры через заданный промежуток времени для наглядности (1, 3)*/