console.log("Первая часть задания с арифметическими операциями разных типов:");

let a = "Hello it academy! ";
let b = false;
let c = 3;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log("Операции сложения типов:");
// Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
//string+boolean
console.log (a + b);

//string+number
console.log (a + c);

//number+boolean
console.log (c + b);

console.log("Операции умножения типов:");
// Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

//string * boolean
console.log (a * b);

//string * number
console.log (a * c);

//number * boolean
console.log (c * b);

console.log("Операции деления типов:");
//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

//string/boolean
console.log (a / b);

//string/number
console.log (a / c);

//number/Boolean
console.log (c / b);

console.log("Вторая часть задания с преобразованиями типов через объявление переменной");
//Выполнить явное преобразование(number, string, boolean)

let value = 1;
console.log(typeof value); // number
console.log(value); 

value = String(value); // теперь value это строка "1"
console.log(typeof value); // string
console.log(value); 

value = Boolean(value); // теперь value это булевое значение "true"
console.log(typeof value); // boolean
console.log(value); 