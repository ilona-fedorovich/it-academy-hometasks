/* 5 Создайте функцию, которая принимает массив, содержащий числа или массивы чисел любой вложенности, и возвращает сумму всех чисел в
массиве. В массиве вложенности внутри могут быть любые типы данных, в том числе массивы. */


function getArray (array) {
    let arrayNum = array;
    arrayNum = array.flat(Infinity); /* через данный метод я решила поднять на один уровень все подмассивы и переформировать их в массив единого уровня */
    console.log(arrayNum);

    let sum = arrayNum.reduce(function(a, b){
        return a + b;
    }, 0); /* просуммировала элементы нового массива */

    return {array, sum};
}
    
const randomArrayItems = getArray ([[-2], 1, 1, [1, [3]]]);
console.log(randomArrayItems);