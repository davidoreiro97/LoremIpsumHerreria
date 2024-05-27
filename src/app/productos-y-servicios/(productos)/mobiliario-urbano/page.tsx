import styles from "./page.module.css";
import Galeria from "@/components/Galeria/Galeria";
import imagenesMU from "../../../../../public/bdd/mobiliarioUrbano.json";
export default function RejasYPortones() {
	return (
		<div>
			<div className={styles.titulosContainer}>
				<h1 className="titulo_2">MOBILIARIO URBANO</h1>
				<h2 className="titulo_2 subtitulo_2">
					El mobiliario urbano se fabrica a la medida de cada uno de nuestros
					clientes, te mostramos algunos de nuestros trabajos.
				</h2>
			</div>
			<div className={styles.galeriaContainer}>
				<Galeria urls={imagenesMU} />
			</div>
		</div>
	);
}
