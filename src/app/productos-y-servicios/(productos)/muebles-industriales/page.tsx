import styles from "./page.module.css";
import GaleriaProductos from "@/components/galeriaProductos/GaleriaProductos";
export default function Asadores({ params, searchParams }: any) {
	let numPagina = searchParams.pag
		? parseInt(searchParams.pag as string, 10)
		: 1;
	return (
		<>
			<div className={styles.tituloContainer}>
				<h1 className="titulo_2">MUEBLES INDUSTRIALES</h1>
				{/* <GaleriaProductos
					categoria="muebles-industriales"
					numPagina={numPagina}
				/> */}
			</div>
		</>
	);
}
