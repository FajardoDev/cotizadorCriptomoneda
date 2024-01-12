import { useState } from "react";
import styled from "@emotion/styled";
import { useSelectMonedas } from "../hooks/useSelectMonedas";

import { Error } from "./Error";
import { monedas } from "../data/monedas";

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
export const Formulario = ({ setMonedas, cripto }) => {
	const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
	const [criptomonedas, SelectCriptoMonedas] = useSelectMonedas(
		"Elige tu Criptomonedas",
		cripto,
	);

	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([moneda, criptomonedas].includes("")) {
			setError("Ambos campos son obligatorios");
			return;
		}
		setError(false);
		// para pasar el object valor de del select
		setMonedas({
			moneda,
			criptomonedas,
		});
	};

	return (
		<>
			{error && <Error>{error}</Error>}
			<form onSubmit={handleSubmit}>
				<SelectMonedas />
				<SelectCriptoMonedas />

				<InputSumit type="submit" value="Cotizar" />
			</form>
		</>
	);
};
