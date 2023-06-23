/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

export const fizzbuzz = (number) => {
	if (typeof number != 'number') throw new Error('parameter provided must be a number');
	if (Number.isNaN(number)) throw new Error('parameter provided must be a number');

	const multiplies = { 3: 'fizz', 5: 'buzz'	};
	let output = '';

	Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
		  if (number % multiplier === 0) output += word;
	});
	
	// if (number % 15 === 0) return 'fizzbuzz';
	// if (number % 3 === 0) return 'fizz';
	// if (number % 5 === 0) return 'buzz';
	
  return output === '' ? number : output ;
};

fizzbuzz(3);
