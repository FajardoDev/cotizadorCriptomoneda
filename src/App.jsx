import styled from "@emotion/styled";
import { Formulario } from "./components/Formulario";
import ImagenCripto from "./img/imagen-criptos.png";
import { useEffect, useState } from "react";
import { getCotizarCripto } from "./helpers/getCotizarCripto";
import { ShowResultadoApi } from "./components/ShowResultadoApi";
import { useFetchCriptos } from "./hooks/useFetchCriptos";

const Contenedor = styled.div`
	max-width: 992px;
	margin: 0 auto;
	width: 90%;

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

const Imagen = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 100px auto 0 auto;
	display: block;
`;

const Heading = styled.h1`
	font-family: "Lato", sans-serif;
	text-align: center;
	font-weight: 700;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;

	&::after {
		content: "";
		width: 100px;
		height: 6px;
		background-color: #66a2fe;
		display: block;
		margin: 10px auto 0 auto;
	}
`;

function App() {
	const [monedas, setMonedas] = useState({}); // para pasar el object valor de del select
	const [resultadoApi, setResultadoApi] = useState({});

	const { cripto, isLoading } = useFetchCriptos();

	const getImages = async () => {
		const newRespuesta = await getCotizarCripto(monedas);
		setResultadoApi(newRespuesta);
		// console.log(newRespuesta);
	};

	useEffect(() => {
		if (Object.keys(monedas).length > 0) {
			getImages();
		}
	}, [monedas]);

	return (
		<Contenedor>
			<Imagen src={ImagenCripto} alt="Imagen Criptomonedas" />

			<div>
				<Heading className=" font-extrabold">
					Cotiza Criptomonedas al Instante
				</Heading>

				<Formulario setMonedas={setMonedas} cripto={cripto} />

				{isLoading && (
					<div className="sk-fading-circle">
						<div className="sk-circle1 sk-circle"></div>
						<div className="sk-circle2 sk-circle"></div>
						<div className="sk-circle3 sk-circle"></div>
						<div className="sk-circle4 sk-circle"></div>
						<div className="sk-circle5 sk-circle"></div>
						<div className="sk-circle6 sk-circle"></div>
						<div className="sk-circle7 sk-circle"></div>
						<div className="sk-circle8 sk-circle"></div>
						<div className="sk-circle9 sk-circle"></div>
						<div className="sk-circle10 sk-circle"></div>
						<div className="sk-circle11 sk-circle"></div>
						<div className="sk-circle12 sk-circle"></div>
					</div>
				)}

				{resultadoApi.PRICE && <ShowResultadoApi resultadoApi={resultadoApi} />}
			</div>
		</Contenedor>
	);
}

export default App;
