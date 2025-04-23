// 3. Написать функцию которая подсчитывает количество Пятниц 13-ого с любой заданной даты в 
// прошлом до сегодня. Ваш код должен иметь возможность считать количество дней на любую заданую в 
// переменной первоначальную дату и считать верно через 10-15-20 лет 
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

const getFriday13Days = (dateFrom) => {
    const dateStart = new Date(dateFrom)
    const dateStartInMilliseconds = dateStart.getTime()

    const dateFinish = new Date()
    const dateFinishMilliseconds = dateFinish.getTime()

    const fridayWeekNum = 5
    const friday13Date = 13
    const dayInMilliseconds = 86400000 //Добавила для корректировки расчета дат
    const friday13Dates = []
    
    for (let i = dateStartInMilliseconds; i <= dateFinishMilliseconds; i += dayInMilliseconds) {
        const date = new Date(i)
        if((date.getDay() === fridayWeekNum) && (date.getDate() === friday13Date)) {
            friday13Dates.push(date)
        }
    }
    return {friday13Dates, count: friday13Dates.length}
}

const dates = getFriday13Days('12.12.2024')
console.log('friday13Dates', dates);