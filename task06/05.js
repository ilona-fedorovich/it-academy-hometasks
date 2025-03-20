/* 5. Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве. 
Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */

function addLetters(array, index, item) {
    array.splice (index, 0, item);
    return array;
    }

    let numbArr = [1, 2, 3, 4, 5];
    let numbArr2 = addLetters (numbArr, 2, 'a');
    numbrArr2 = addLetters (numbArr, 3, 'b');
    numbrArr2 = addLetters (numbArr, 6, 'c');
    numbrArr2 = addLetters (numbArr, 8, 'e');
    console.log(numbArr2);