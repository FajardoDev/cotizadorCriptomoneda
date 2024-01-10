import styled from "@emotion/styled";
import { useSelectMonedas } from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

import { useFetchCriptos } from "../hooks/useFetchCriptos";

const InputSumit = styled.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	color: #fff;
	border-radius: 0.5rem;
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 600;
	transition: background-color 0.3s ease;
	margin-top: 30px;

	&:hover {
		background-color: #7a7dfe;
		cursor: pointer;
	}
`;
// moneda  asi se llama el state que tenorné en useSelectMonedas
export const Formulario = () => {
	const { cripto, isLoading } = useFetchCriptos();

	const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
	const [criptomonedas, SelectCriptoMonedas] = useSelectMonedas(
		"Elige tu Criptomonedas",
		cripto,
	);
	// SelectMonedas();

	return (
		<form>
			<SelectMonedas />
			<SelectCriptoMonedas />

			<InputSumit type="submit" value="Cotizar" />
		</form>
	);
};
