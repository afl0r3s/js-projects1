import { describe, expect, it } from 'vitest';
import { listGifts } from '../src/challenge02.js';

describe('listGifts', () => {
	it('should be a function', () => {
		expect(() => listGifts()).toBeTypeOf('function');
	});
	it('should throw a error if first parameter is missing', () => {
		expect(() => listGifts()).toThrow();
	});
	it('should return a object as a response', () => {
		expect(listGifts('string text')).toBeTypeOf('object');
	});
});
