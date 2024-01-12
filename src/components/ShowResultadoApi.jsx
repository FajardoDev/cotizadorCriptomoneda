import styled from "@emotion/styled";

export const ShowResultadoApi = ({ resultadoApi }) => {
	const { PRICE, LOWDAY, CHANGE24HOUR, HIGHDAY, IMAGEURL, LASTUPDATE } =
		resultadoApi;

	const Resultado = styled.div`
		font-weight: 400;
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 30px;
	`;

	const Imagen = styled.img`
		display: block;
		width: 120px;
	`;

	const Texto = styled.p`
		font-size: 18px;
		line-height: 1.8;

		span {
			font-weight: 700;
		}
	`;

	const Precio = styled.p`
		font-size: 26px;
		margin-bottom: 10px;

		span {
			font-weight: 700;
		}
	`;

	return (
		<Resultado>
			<Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />

			<div>
				<Precio>
					El Precio es de: <span>{PRICE}</span>{" "}
				</Precio>

				<Texto>
					{" "}
					Precio más alto del día: <span>{HIGHDAY}</span>
				</Texto>

				<Texto>
					{" "}
					Precio más bajo del día: <span>{LOWDAY}</span>
				</Texto>

				<Texto>
					Variación última 24 horas: <span>{CHANGE24HOUR}</span>
				</Texto>

				<Texto>
					Última Actualización: <span>{LASTUPDATE}</span>
				</Texto>
			</div>
		</Resultado>
	);
};
