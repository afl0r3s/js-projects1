import { describe, it, expect } from 'vitest';
import { factory } from '../src/challenge23';


describe('factory', () => {
	// it('should be a function', () => {
	// 	expect(factory).toBeTypeOf('function');
	// });
	it('should throw a error if first parameter is missing', () => {
		expect(() => factory()).toThrow();
	});
	it('should throw a error if first parameter is not a string', () => {
		expect(() => factory(2)).toThrow();
	});
	it('should throw a error if second parameter is not a string', () => {
		expect(() => factory('a', 2)).toThrow();
	});
	it('should return a boolean', () => {
		expect(factory('a', 'b')).toBeTypeOf('boolean');
	});
	it('should return false if srings provided have different lenght', () => {
		expect(factory('abc', 'de')).toBe(false);
	});
  it('should return false if srings provided have different lenght', () => {
		expect(factory('aab', 'ab')).toBe(false);
	});
	it('should return false if strings provided have different number of unique letters', () => {
		expect(factory('abc', 'ddd')).toBe(false);
	});
  it('should return false if strings has different order of transformation', () => {
		expect(factory('XBOX', 'XXBO')).toBe(false);
	});
});
