import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";

const Contenedor = styled.div`
	max-width: 900px;
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
`;

function App() {
	return (
		<Contenedor>
			<Imagen src={ImagenCripto} alt="Imagen Criptomonedas" />

			<Heading className=" font-extrabold">Cotizador de Criptomonedas</Heading>
		</Contenedor>
	);
}

export default App;

//  const Heading = styled.h1 `
// font-size: 2rem;
// font-family: lato;
// `;

// <Heading>Nuestros Productos</Heading>
