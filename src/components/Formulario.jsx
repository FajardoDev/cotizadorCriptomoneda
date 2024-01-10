import styled from "@emotion/styled";
import { useSelectMonedas } from "../hooks/useSelectMonedas";

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

	&:hover {
		background-color: #7a7dfe;
		cursor: pointer;
	}
`;

export const Formulario = () => {
	const [SelectMonedas] = useSelectMonedas("Elige tu Moneda");
	// const [SelectCriptoMonedas] = useSelectMonedas("Elige tu Criptomonedas");

	// SelectMonedas();

	return (
		<form>
			<SelectMonedas />
			{/* <SelectCriptoMonedas /> */}

			<InputSumit type="submit" value="Cotizar" />
		</form>
	);
};
