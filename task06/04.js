/* 4. Напишите функцию, которая вставит данные в массив с заданного места в массиве. 
Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/

function insertAt(array, index, item1, item2, item3) {
array.splice (index, 0, item1, item2, item3);
return array;
}

let numArr = [1, 2, 3, 4, 5];
insertAt(numArr, 3, 'a', 'b', 'c');
console.log(numArr);

