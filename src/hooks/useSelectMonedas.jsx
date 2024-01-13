// Un hooks retorna un array ó un objects
import { useState } from "react";
import styled from "@emotion/styled";

export const useSelectMonedas = (label, opciones) => {
	const [state, setState] = useState(""); // Para leer el Select
	const [error, setError] = useState(false);

	const Label = styled.label`
		color: #fff;
		display: block;
		font-size: 24px;
		font-weight: 700;
		margin: 15px 0;
	`;

	const Select = styled.select`
		width: 100%;
		font-size: 18px;
		padding: 14px;
		border-radius: 10px;
		font-weight: 500;
	`;

	const SelectMonedas = () => (
		// console.log("Desde Select Monedas");
		<>
			<Label htmlFor="monedas">{label}</Label>

			<Select
				className="shadow-lg shadow-blue-950/60 bg-slate-300/20 has-[:checked]:bg-indigo-50 has-[:checked]:text-slate-900 has-[:checked]:ring-indigo-200"
				name=""
				id="monedas"
				value={state}
				onChange={({ target }) => setState(target.value)}
			>
				<option value="">Seleccione...</option>

				{opciones.map((opcion) => (
					<option key={opcion.id} value={opcion.id}>
						{opcion.nombre}
					</option>
				))}
			</Select>
		</>
	);

	return [state, SelectMonedas];
};
