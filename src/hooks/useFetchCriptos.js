import { useEffect, useState } from "react";
import { getApiCripto } from "../helpers/getApiCripto";

export const useFetchCriptos = () => {
	const [cripto, setCripto] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getCripto = async () => {
		const newCripto = await getApiCripto();
		setCripto(newCripto);
		setIsLoading(false);
	};

	useEffect(() => {
		getCripto();
	}, []);

	return {
		cripto,
		isLoading,
	};
};
