export const getCotizarCripto = async (monedas) => {
	const { moneda, criptomonedas } = monedas;

	const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomonedas}&tsyms=${moneda}`;

	const respuesta = await fetch(url);
	const resultado = await respuesta.json();

	return resultado.DISPLAY[criptomonedas][moneda];
};
