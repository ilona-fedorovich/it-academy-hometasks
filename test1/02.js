/* 2 Создайте функцию, которая принимает массив произвольных значений, удаляет все "falsy" значения, а затем возвращает массив,
отсортированный в порядке убывания. */

function getRandomArrValues(array) {  
    let randomArr = array;
    
    randomArr.sort((a, b) => b - a);
    return randomArr.filter((val) => val); /* Сделала проверку на false данные, которые проходили в начале курса(0, null, undefined и т.п.) */
    }
    
    const randomValues = ['Слово', [], false, 6, null, , undefined, 256, "Приятности", 0, 87];
    console.log(getRandomArrValues(randomValues));