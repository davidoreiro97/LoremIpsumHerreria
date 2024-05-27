import styles from "./page.module.css";
import Galeria from "@/components/Galeria/Galeria";
import imagenesPasamanos from "../../../../../public/bdd/pasamanos.json";
export default function RejasYPortones() {
	return (
		<div>
			<div className={styles.titulosContainer}>
				<h1 className="titulo_2">PASAMANOS Y BARANDAS</h1>
				<h2 className="titulo_2 subtitulo_2">
					Los pasamanos se fabrican a la medida de cada uno de nuestros
					clientes, te mostramos algunos de nuestros trabajos.
				</h2>
			</div>
			<div className={styles.galeriaContainer}>
				<Galeria urls={imagenesPasamanos} />
			</div>
		</div>
	);
}
