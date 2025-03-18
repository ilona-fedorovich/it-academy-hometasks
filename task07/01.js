
// 1. Написать функцию которая будет эмулировать игру в кубики, 
// заданное количество игроков по очереди бросают кубик, каждый 
// в итоге бросает одинаковое количество раз 
// (должно работать с любым количеством раз заданным в переменной). 
// У кого сумма набранная будет наибольшей - тот выиграл. Если суммы равны то ничья. 
// Выведите результаты в консоль.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function countScoreGame (player, throws) {
    let winner = 0;
    let winnerScore = 0;

    for (let i = 1; i <= player; i++) {
        let score = 0;
        for (let j = 1; j <= throws; j++) {
            score += getRandomInt(1, 7);
        }
        if (score > winnerScore) {
            winner = i;
            winnerScore = score;
        }
    }

    return {winner, winnerScore};
}

console.log(countScoreGame(3, 3));