// 2. Написать функцию которая будет разбивать число на заданное количество рандомных чисел 
// сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет 
// равна 15) (4,6,5) - Ваш код должен работать с любым числом заданным в переменной (не только с 15) и с любым 
// количеством частей на которые надо разбить число..
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)
// б. числа разбивки дробные с 2 знаками после запятой 4.55, 5.20, 5.25)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
} //функция рандома для вывода целых чисел

function breakNumbs (number, parts) {
    const numbMain = number;
    const numbBreak = parts;
    const randomArrNumbs = []

    for (let i = numbBreak; i < numbMain / 2; i++) {
         let newNum = getRandomInt(0, numbMain) / 2;
        if (numbMain) 
            {randomArrNumbs.push(newNum)}
    }

         let sum = randomArrNumbs.reduce(function(a, b){
            return a + b;
        }, 0);


    return {number, randomArrNumbs, sum}
}

const randomInit = breakNumbs(20.55, 5);
console.log(randomInit)

