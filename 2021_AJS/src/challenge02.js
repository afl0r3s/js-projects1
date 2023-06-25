function listGifts(letter) {
	const valid = letter
		.trim()
		.split(' ')
		.filter((e) => e[0] !== '_');
	const obj1 = {};
	valid.map((e) => {
		if (!obj1[e]) obj1[e] = 0;
		obj1[e]++;
	});
	return obj1;
}
