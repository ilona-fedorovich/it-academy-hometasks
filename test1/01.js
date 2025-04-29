/* 1. Напишите функцию, которая принимает массив строковых представлений чисел и форматирует их в виде валюты (например, из
"1234" в "$1,234.00"). Функция должна корректно обрабатывать некорректные входные данные и возвращать для них понятную
пользователю ошибку. */

function getNumbStrokeArr (array) {

    let currency = array;
    let currencyNum = +currency;

/* Сделала проверку на числа, всё, что NaN - должно отображать ошибку, за исключением, если разделителем в числе является точка (что и указала в ошибке) */

    if (Number.isNaN(currencyNum)) {
        console.log(`Введен некорректный формат числа ${array} для форматирования. Число не должно содержать никаких дополнительных символов, за исключением "."`);
    } else {
        console.log(currencyNum.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
    };

    return currencyNum;
};

let strokeNumbs = ["12f43"]; 
getNumbStrokeArr(strokeNumbs);