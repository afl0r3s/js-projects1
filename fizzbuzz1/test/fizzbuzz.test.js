import { describe, expect, it } from 'vitest';
import { fizzbuzz } from '../src/fizzbuzz';

describe('fizzbuzz', () => {
	//this test is covered for the rest of tests
	// it('should be a function', () => {
	// 	expect(typeof fizzbuzz).toBe('function');
	// });
	it('should throw a error if not number is provided as parameter', () => {
		expect(() => fizzbuzz()).toThrow();
	});
	it('should throw a specific error if not number is provided as parameter', () => {
		expect(() => fizzbuzz()).toThrow('parameter provided must be a number');
	});
	it('should throw a specific error message not a number is provided', () => {
		expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number');
	});
	it('should return 1 if number provied is 1', () => {
		expect(fizzbuzz(1)).toBe(1);
	});
	it('should return 2 if number provied is 2', () => {
		expect(fizzbuzz(2)).toBe(2);
	});
	it('should be return "fizz" if number provied is 3', () => {
		expect(fizzbuzz(3)).toBe('fizz');
	});
	it('should be return "fizz" if number provied is multiple of 3', () => {
		expect(fizzbuzz(6)).toBe('fizz');
		expect(fizzbuzz(9)).toBe('fizz');
		expect(fizzbuzz(12)).toBe('fizz');
	});
	// this test is actually covered
	// it('should be return 4 if number provied is 4', () => {
	// 	expect(fizzbuzz(4)).toBe(4);
	// });
	it('should be return "buzz" if number provied is multiple of 5', () => {
		expect(fizzbuzz(5)).toBe('buzz');
		expect(fizzbuzz(10)).toBe('buzz');
	});
	it('should be return "fizzbuzz" if number provided is multiple of 15', () => {
		expect(fizzbuzz(15)).toBe('fizzbuzz');
		expect(fizzbuzz(30)).toBe('fizzbuzz');
	});
});
