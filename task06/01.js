// /* 1. Дана строка из четного количества цифр. Проверьте, что сумма первой половины цифр равняется 
// сумме второй половине цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */


function checkNumbers(string) {
    let stringNum = string;
    string = +string;
    let left = 0;
    let right = 0;

    for(let i = 0, j = stringNum.length-1; i < stringNum.length/2; i++, j--) {
        left += Number(stringNum[i]); 
        right += Number(stringNum[j]); 
    }

    if(left == right) {
        return true;
      }
      else {
        return false;
      }

  }
  
  console.log(checkNumbers('0550'));