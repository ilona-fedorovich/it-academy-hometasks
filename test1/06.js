/* 6 Напишите функцию, которая принимает массив объектов и функцию для сравнения элементов. Функция должна возвращать новый массив,
содержащий только последние уникальные элементы согласно предоставленной функции сравнения. Функция сравнения: Эта функция
принимает два аргумента (два объекта из массива) и возвращает true, если они считаются эквивалентными для целей уникальности, и false в
противном случае. */

function getObjArray (array) {

    let currentArray = array;
    let newArray = currentArray.reduce((acc, item) => { /*Добавила проверку на уникальность и собрала всё в новый массив, перебрав массив через редьюс*/
    let oldItem = acc.find(oldItem => oldItem.id === item.id); 
        if (oldItem) {
        } 
        else {
        acc.push(item) 
        }
        return acc;
        }, 
        []);

    return newArray; 
}

let idPersons = [
    {id: 1, name: 'John', age: 28},
    {id: 2, name: 'John', age: 26},
    {id: 1, name: 'John', age: 26},
    {id: 3, name: 'Doe', age: 36},
    {id: 3, name: 'Patricia', age: 36}
    ];

console.log(getObjArray(idPersons));




