/* 3. Напишите функцию, которая принимает массив объектов с полями name и age, и группирует их в объект, где ключи 
— это возраст, а значения — массивы имен людей этого возраста. */

function getParams (array) {

    return array.reduce((obj, value) => {
            obj[value.age] = obj[value.age] || { 
                name: [],
              };
              obj[value.age].name.push(value.name); /* Через метод редьюс присвоила именам с одинаковым значением по возрасту сбор в массив имен уже через метод пуш */
    
            return obj;
          }, {})
    
    };
    
    const arrayPersonParams = getParams ([
        {name: 'Piter Parker', age: 18},
        {name: 'Superman', age: 28},
        {name: 'Joker', age: 26},
        {name: 'Darth Vader', age: 26},
        {name: 'Hulk', age: 28},
        {name: 'Captain America', age: 100},
        {name: 'Black widow', age: 28},
        {name: 'Iron Man', age: 57},
        
    ]);
    
    console.log(arrayPersonParams);