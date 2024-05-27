import styles from "./page.module.css";
import Galeria from "@/components/Galeria/Galeria";
import imagenesEscaleras from "../../../../../public/bdd/escaleras.json";
export default function RejasYPortones() {
	return (
		<div>
			<div className={styles.titulosContainer}>
				<h1 className="titulo_2">ESCALERAS EN HIERRO</h1>
				<h2 className="titulo_2 subtitulo_2">
					Las escaleras se fabrican a la medida de cada uno de nuestros
					clientes, te mostramos algunos de nuestros trabajos.
				</h2>
			</div>
			<div className={styles.galeriaContainer}>
				<Galeria urls={imagenesEscaleras} />
			</div>
		</div>
	);
}
