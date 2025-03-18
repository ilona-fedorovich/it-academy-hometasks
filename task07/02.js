// 2. Написать функцию которая будет разбивать число на заданное количество рандомных чисел 
// сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет 
// равна 15) (4,6,5) - Ваш код должен работать с любым числом заданным в переменной (не только с 15) и с любым 
// количеством частей на которые надо разбить число..
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)
// б. числа разбивки дробные с 2 знаками после запятой 4.55, 5.20, 5.25)

function breakNumbs(number, parts) {

    let randomArrNumbs = [];
  
    for (let i = 0; i < parts - 1; i++) {
      let randomPart = Math.floor(Math.random() * number); 
      randomArrNumbs.push(randomPart);
      number -= randomPart;
    }
  
    randomArrNumbs.push(number);

    let sum = randomArrNumbs.reduce(function(a, b){
        return a + b;
    }, 0);

    return {randomArrNumbs, sum, parts};
  }

  console.log(breakNumbs(20, 3));