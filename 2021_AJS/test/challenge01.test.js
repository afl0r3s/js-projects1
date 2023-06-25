import { describe, it, expect } from 'vitest';
import { contarOvejas } from '../src/challenge01';

const ovejas = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' },
	{ name: 'AAAAAaaaaa', color: 'rojo' },
	{ name: 'Nnnnnnnn', color: 'rojo' },
];

const resultado = [
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' },
];



describe('contarOvejas', () => {
	it('should be a function', () => {
		expect(contarOvejas).toBeTypeOf('function');
	});
	it('should throw a error if first parameter is missing', () => {
		expect(() => contarOvejas()).toThrow();
	});
	it('should return resultado array if if the function filter correctly', () => {
		expect(contarOvejas(ovejas)).toEqual(resultado);
	});
});
