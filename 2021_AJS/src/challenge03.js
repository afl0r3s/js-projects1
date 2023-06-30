export const isValid = (letter) => {
	if (letter == undefined) throw new Error('letter has no info');
	if (typeof letter !== 'string') throw new Error('letter is not a valid string');
	if (letter[0] == ')') return false;

	let parentesisIzq = 0;
	let parentesisDer = 0;
	let corcheteIzq = 0;
	let corcheteDer = 0;
	let llaveIzq = 0;
	let llaveDer = 0;
	for (let i = 0; i < letter.length; i++) {
		if (letter[i] == '(') {
			parentesisIzq++;
			if (letter[i + 1] == ')') return false;
		}
		if (letter[i] == ')') parentesisDer++;

		if (letter[i] == '[') corcheteIzq++;
		if (letter[i] == ']') corcheteDer++;

		if (letter[i] == '{') llaveIzq++;
		if (letter[i] == '}') llaveDer++;
	}
	return parentesisIzq - parentesisDer == 0 && corcheteIzq - corcheteDer == 0 && llaveIzq - llaveDer == 0;
};