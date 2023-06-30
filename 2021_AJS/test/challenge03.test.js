import { describe, it, expect } from 'vitest';
import { isValid } from '../src/challenge03';

describe('isValid', () => {
	it('should be a function', () => {
		expect(() => isValid()).toBeTypeOf('function');
	});
	it('should throw a error if first parameter is missing', () => {
		expect(() => isValid()).toThrow();
	});
	it('should throw a error if first parameter is not string', () => {
		expect(() => isValid(2)).toThrow();
	});
	it('should return false if the first character is a )', () => {
		expect(isValid(') test text')).toBeFalsy();
	});
  
});
