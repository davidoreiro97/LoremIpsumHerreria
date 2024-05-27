import styles from "./page.module.css";
import Galeria from "@/components/Galeria/Galeria";
import imagenesGalpones from "../../../../../public/bdd/galpones.json";
export default function RejasYPortones() {
	return (
		<div>
			<div className={styles.titulosContainer}>
				<h1 className="titulo_2">GALPONES Y TINGLADOS</h1>
			</div>
			<div className={styles.galeriaContainer}>
				<Galeria urls={imagenesGalpones} />
			</div>
		</div>
	);
}
