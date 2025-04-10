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

    /* Тестирование умножения чисел*/

      

  });
