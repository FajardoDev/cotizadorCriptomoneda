import styled from "@emotion/styled";
import { Formulario } from "./components/Formulario";
import { useEffect, useState } from "react";
import { getCotizarCripto } from "./helpers/getCotizarCripto";
import { ShowResultadoApi } from "./components/ShowResultadoApi";
import { useFetchCriptos } from "./hooks/useFetchCriptos";
import { Spinner } from "./components/Spinner";
import ImagenCriptos from "../src/img/image-3046639_1280.png";

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
	max-width: 800px;
	width: 90%;
	margin: 220px auto 0 auto;
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

const Titulo = styled.h2`
	padding: 1rem;
	text-align: center;
	font-size: 1.4rem;
	font-weight: 600;
	background: #181939;
	color: #e0dddd;
`;

function App() {
	const [monedas, setMonedas] = useState({}); // para pasar el object valor del select
	const [resultadoApi, setResultadoApi] = useState({});

	const { cripto, isLoading } = useFetchCriptos();

	const [resultado, setResultado] = useState(false);

	const getImages = async () => {
		setResultado(true); // Antes de obtener la repuesta de la Api
		const newRespuesta = await getCotizarCripto(monedas);
		setResultadoApi(newRespuesta);
		setResultado(false); // Despúes de obtener la repuesta de la Api
		// console.log(newRespuesta);
	};

	useEffect(() => {
		if (Object.keys(monedas).length > 0) {
			getImages();
		}
	}, [monedas]);

	return (
		<>
			<Titulo className="shadow-lg shadow-blue-950/70">
				<marquee behavior="" direction="">
					Explora los Precio y Variaciones en Tiempo Real de Todas las Criptomonedas
					con Nuestra Plataforma Integrada.{" "}
				</marquee>
			</Titulo>

			<Contenedor>
				<Imagen src={ImagenCriptos} alt="Imagen Criptomonedas" />

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
					{resultado && <Spinner />}
					{resultadoApi.PRICE && <ShowResultadoApi resultadoApi={resultadoApi} />}
				</div>
			</Contenedor>
		</>
	);
}

export default App;
