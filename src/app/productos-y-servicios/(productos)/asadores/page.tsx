import styles from "./page.module.css";
import GaleriaProductos from "@/components/galeriaProductos/GaleriaProductos";
export default function Asadores({ params, searchParams }: any) {
	let numPagina = searchParams.pag
		? parseInt(searchParams.pag as string, 10)
		: 1;
	return (
		<>
			<div className={styles.tituloContainer}>
				<h1 className="titulo_2">Asadores</h1>
			</div>
			<div className={styles.productosContainer}>
				<GaleriaProductos categoria="asadores" numPagina={numPagina} />
			</div>
		</>
	);
}
