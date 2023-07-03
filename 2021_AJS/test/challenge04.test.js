import { describe, it, expect } from 'vitest';

//the function draw a tree using a text as a entry

const tree = (text) => {
  if (text == undefined) throw new Error('letter has no info');
  if (typeof letter !== 'string') throw new Error('letter is not a valid string');
  return null
}

describe('tree', () => {
	it('should be a function', () => {
		expect(() => tree()).toBeTypeOf('function');
	});
	it('should throw a error if first parameter is missing', () => {
		expect(() => tree()).toThrow();
	});
	it('should throw a error if first parameter is not string', () => {
		expect(() => tree(2)).toThrow();
	});
	// it('should return false if the first character is a )', () => {
	// 	expect(tree(') test text')).toBeFalsy();
	// });
  
});