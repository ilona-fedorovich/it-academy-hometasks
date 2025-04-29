/* 4. Напишите функцию isPalindrome, которая проверяет, является ли заданная строка палиндромом. Палиндром — это слово, фраза или
последовательность, которые читаются одинаково как в прямом, так и в обратном порядке (без учета пробелов, знаков препинания и регистра).
Игнорируйте пробелы и знаки препинания, а строки из одного символа следует считать палиндромами (например, "a") */

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, ''); /* Привела к нижнему регистру входящие данные и добавила проверку на регистр, знаки препинания, пробелы */
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}

let palindromeChecker = "MADAM. a-dam";
console.log(isPalindrome(palindromeChecker));
