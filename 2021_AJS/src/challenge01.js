export const contarOvejas = (ovejas) => {
	if (!Array.isArray(ovejas)) console.log('no es array');
	ovejas = ovejas.filter((e) => e.color === 'rojo' && e.name.toLowerCase().includes('n'));
	ovejas = ovejas.filter((e) => e.name.toLowerCase().includes('a'));
	return ovejas;
};