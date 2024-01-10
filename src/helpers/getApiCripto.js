export const getApiCripto = async () => {
	const url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
	const respuesta = await fetch(url);
	const { Data } = await respuesta.json();
	// console.log(Data);

	const CreateObjCripto = Data.map((cripto) => ({
		id: cripto.CoinInfo.Name,
		nombre: cripto.CoinInfo.FullName,
	}));

	console.log(CreateObjCripto);
	return CreateObjCripto;
};
