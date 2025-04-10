const Calculator = require('./calculator');

describe('Calculator: positive and negative tests', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator()
    });

    /* Тестирование суммирования чисел*/

      it('test primitive sum numbers (positive test)', () => {
        expect(calculator.add(1, 5, 7, 0)).toBe(13);
      });
    
      it('test sum of negative numbers (positive test)', () => {
        expect(calculator.add(-1, 0, 2)).toBe(1);
      });

      it('test sum of positive and negative numbers (positive test)', () => {
        expect(calculator.add(0, 150, 0, -150, -0)).toBe(0);
      });
    
      it('test sum of float-numbers (positive test)', () => {
        expect(calculator.add(0.25, 0.25, -0.25, 1, -0.5)).toBe(0.75);
      });

      it('test sum of float-numbers (positive test)', () => {
        expect(calculator.add(0.25, 0.25, -0.25, 1, -0.5)).toBe(0.75);
      });

      it('test sum of 0 (negative test)', () => {
        expect(calculator.add(0)).toBe(0);
      });

      it('test sum of -0 (negative test)', () => {
        expect(calculator.add(-0)).toBe(0);
      });

      it('test sum with rounding numbers (positive test)', () => {
        expect(calculator.add(0.11111111, 0.0000000000001)).toBe(0.1111111100001);
      });

      it('test sum with bigInt (positive test)', () => {
        expect(calculator.add(999999999999999999999999999, 9999999999999999999999999999999)).toBe(10000999999999999999999999999998);
      });

      it('test sum with void in the last parameter of array (negative test)', () => {
        expect(calculator.add(88, 55.5, -2, 0, )).toBe(141.5); 
      });

      it('test sum with NaN (negative test)', () => {
        expect(calculator.add(88, NaN, -2, 0, )).toBe(NaN); 
      });

      it('test sum with null (negative test)', () => {
        expect(calculator.add(88, null, -2, 0, )).toBe(86); 
      });

      it('test sum with undefined (negative test)', () => {
        expect(calculator.add(88, undefined, -2, 0, )).toBe(NaN); 
      });

      it('test sum with boolean true (negative test)', () => {
        expect(calculator.add(88, true, 0, )).toBe(89); 
      });

      it('test sum with void in array (negative test)', () => {
        expect(calculator.add()).toBe(0); 
      });

    /* Тестирование умножения чисел*/

    it('test primitive multiplying numbers (positive test)', () => {
        expect(calculator.multiply(1, 5, 5)).toBe(25);
      });
    
      it('test multiplying numbers with 0 (positive test)', () => {
        expect(calculator.multiply(0, 5, 5)).toBe(0);
      });

      it('test multiplying numbers with 0 (positive test)', () => {
        expect(calculator.multiply(0, 0, 0)).toBe(0);
      });

      it('test multiplying numbers with 0 and -0 (negative test)', () => { //баг умножения 0 на -0
        expect(calculator.multiply(0, -0)).toBe(0); 
      });

      it('test multiplying numbers with negative int number (positive test)', () => {
        expect(calculator.multiply(-1, 1)).toBe(-1);
      });

      it('test multiplying numbers with negative float number (positive test)', () => {
        expect(calculator.multiply(0.55, 0.1234, -0.02)).toBe(-0.0013574);
      });

      it('test multiplying with bigInt (positive test)', () => {
        expect(calculator.multiply(999999999999999999999999999, 9999999999999999999999999999999)).toBe(9999999999999999999999999989999000000000000000000000000001);
      });

      it('test multiplying with void in the last parameter of array (negative test)', () => {
        expect(calculator.multiply(88, 55.5, -2, )).toBe(-9768); 
      });

      it('test multiplying with NaN (negative test)', () => {
        expect(calculator.multiply(88, NaN, -2)).toBe(NaN); 
      });

      it('test multiplying with null (negative test)', () => { //баг, нулл это 0, а не -0
        expect(calculator.multiply(88, null, -2)).toBe(0); 
      });

      it('test multiplying with undefined (negative test)', () => {
        expect(calculator.multiply(88, undefined, -2)).toBe(NaN); 
      });

      it('test multiplying with boolean true (negative test)', () => {
        expect(calculator.multiply(88, true)).toBe(88); 
      });

      it('test multiplying with void in array (negative test)', () => { //баг, пустота должна = 0
        expect(calculator.multiply()).toBe(0); 
      });

      it('test multiplying with zero and int (positive test)', () => { 
        expect(calculator.multiply(0, 1)).toBe(0); 
      });

    /* Тестирование вычитания чисел*/

    
    it('test primitive subtraction numbers (positive test)', () => {
        expect(calculator.subtraction(10, 5)).toBe(5);
      });

      it('test primitive subtraction numbers = 0 (positive test)', () => {
        expect(calculator.subtraction(5, 5)).toBe(0);
      });

      it('test primitive subtraction positive and negative numbers (positive test)', () => {
        expect(calculator.subtraction(-5, 5)).toBe(-10);
      });

      it('test primitive subtraction negative numbers (positive test)', () => {
        expect(calculator.subtraction(0, -5)).toBe(5);
      });

      it('test primitive subtraction positive numbers (positive test)', () => {
        expect(calculator.subtraction(0, 5)).toBe(-5);
      });

      it('test primitive subtraction negative numbers (positive test)', () => {
        expect(calculator.subtraction(-5, -5)).toBe(0);
      });

      it('test subtraction negative float numbers (positive test)', () => { //можно рассматривать как баг если использовать метод toBe, если мы не  хотим округлять число для пользователя
        expect(calculator.subtraction(-2.55, -2.5)).toBeCloseTo(-0.05);
      });

      it('test subtraction negative float number and positive int number (positive test)', () => { 
        expect(calculator.subtraction(1, -0.5)).toBe(1.5);
      });

      it('test subtraction zero number positive and negative (negative test)', () => { 
        expect(calculator.subtraction(-0, -0)).toBe(0);
      });

      it('test subtraction negative float number and positive int number (positive test)', () => { 
        expect(calculator.subtraction(1, -0.5)).toBe(1.5);
      });

          /* Тестирование деления чисел*/

          it('test primitive dividing numbers 10:5 (positive test)', () => {
            expect(calculator.divide(10, 5)).toBe(2);
          });

          it('test primitive dividing numbers 10:10 (positive test)', () => {
            expect(calculator.divide(10, 10)).toBe(1);
          });

          it('test primitive dividing numbers 1:10 (positive test)', () => {
            expect(calculator.divide(1, 10)).toBe(0.1);
          });

          it('test primitive dividing numbers 10:0 (negative test)', () => {
            expect(calculator.divide(10, 0)).toBe(Infinity);
          });

          it('test primitive dividing numbers 10:1 (positive test)', () => {
            expect(calculator.divide(10, 1)).toBe(10);
          });

          it('test dividing float numbers (positive test)', () => {
            expect(calculator.divide(0.1, 0.1)).toBe(1);
          });

          it('test dividing negative int numbers -10:1 (positive test)', () => {
            expect(calculator.divide(-10, 1)).toBe(-10);
          });

          it('test dividing negative float numbers (positive test)', () => {
            expect(calculator.divide(-3.14, -0.256)).toBe(12.265625);
          });

          it('test dividing zero (positive test)', () => {
            expect(calculator.divide(0, 1)).toBe(0);
          });

          it('test dividing bigInt (negative test)', () => {
            expect(calculator.divide(-890.23925430341350559, 462752217411111444722)).toBe(-0.000000000000000001924); //точное значение не обрабатывается
          });

          it('test dividing bigInt closeTo method (negative test)', () => {
            expect(calculator.divide(-890.23925430341350559, 462752217411111444722)).toBeCloseTo(-1.923792519642365e-18);
          });

          it('test with NaN divider (negative test)', () => {
            expect(calculator.divide(88, NaN)).toBe(NaN); 
          });
    
          it('test with null divider (negative test)', () => { 
            expect(calculator.divide(88, null)).toBe(Infinity); 
          });
    
          it('test with undefined divider (negative test)', () => {
            expect(calculator.divide(88, undefined)).toBe(NaN); 
          });
    
          it('test with boolean true divider (negative test)', () => {
            expect(calculator.divide(88, true)).toBe(88); 
          });

          it('test with NaN dividend (negative test)', () => {
            expect(calculator.divide(NaN, 12)).toBe(NaN); 
          });
    
          it('test with null dividend (negative test)', () => { 
            expect(calculator.divide(null, 12)).toBe(0); 
          });
    
          it('test with undefined dividend (negative test)', () => {
            expect(calculator.divide(undefined, 12)).toBe(NaN); 
          });
    
          it('test with boolean true dividend (negative test)', () => { 
            expect(calculator.divide(true, 12)).toBe(0.08333333333333333); 
          });
    
          /* Тестирование возведения в степень чисел*/

          it('test primitive exponentiation int positive number (positive test)', () => {
            expect(calculator.exponentiation(10)).toBe(100);
          });

          it('test primitive exponentiation int negative number (positive test)', () => {
            expect(calculator.exponentiation(-10)).toBe(100);
          });

          it('test primitive exponentiation float positive number (positive test)', () => {
            expect(calculator.exponentiation(0.1)).toBe(0.010000000000000002);
          });

          it('test primitive exponentiation float positive number with closeTo (positive test)', () => {
            expect(calculator.exponentiation(0.1)).toBeCloseTo(0.01);
          });

          it('test primitive exponentiation float negative number (positive test)', () => {
            expect(calculator.exponentiation(-25.5)).toBe(650.25);
          });

  });
