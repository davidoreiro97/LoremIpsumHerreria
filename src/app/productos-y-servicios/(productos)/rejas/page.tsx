import styles from "./page.module.css";
import Galeria from "@/components/Galeria/Galeria";
import imagenesRejas from "../../../../../public/bdd/rejas.json";
export default function RejasYPortones() {
	return (
		<div>
			<div className={styles.titulosContainer}>
				<h1 className="titulo_2">REJAS Y PORTONES</h1>
				<h2 className="titulo_2 subtitulo_2">
					Las rejas y portones se fabrican a la medida de cada uno de nuestros
					clientes, te mostramos algunos de nuestros trabajos.
				</h2>
			</div>
			<div className={styles.galeriaContainer}>
				<Galeria urls={imagenesRejas} />
			</div>
		</div>
	);
}
