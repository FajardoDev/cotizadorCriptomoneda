// Un hooks retorna un array ó un objects
import styled from "@emotion/styled";

export const useSelectMonedas = (label) => {
	const Label = styled.label`
		color: #fff;
	`;

	const SelectMonedas = () => (
		// console.log("Desde Select Monedas");
		<>
			<Label htmlFor="">{label}</Label>
		</>
	);

	return [SelectMonedas];
};
