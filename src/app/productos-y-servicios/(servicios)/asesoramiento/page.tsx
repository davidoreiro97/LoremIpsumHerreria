import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
export default function Asesoramiento() {
	return (
		<article className={styles.categoriaServiciosDetalleContainer}>
			<header>
				<h2 className="titulo_2">Asesoramiento</h2>
			</header>
			<div
				className={styles.categoriaServiciosDetalleContainer__imgTextoContainer}
			>
				<Image
					className={
						styles.categoriaServiciosDetalleContainer__imgTextoContainer__img
					}
					src={
						"/assets/media/productosyservicios/servicios/asesoramiento/webp/background.webp"
					}
					alt="imagen de consulta"
					width={400}
					height={400}
				></Image>
				<div
					className={
						styles.categoriaServiciosDetalleContainer__imgTextoContainer__textoContainer
					}
				>
					<p
						className={
							styles.categoriaServiciosDetalleContainer__imgTextoContainer__texto
						}
					>
						Nuestro equipo de expertos te brindará la mejor asesoría
						personalizada para tus necesidades, incluyendo{" "}
						<span className="textoResaltado">
							presupuestos y consultas generales de manera gratuita.
						</span>
					</p>
					<footer className={styles.footerAsesoramiento}>
						<h4 className="titulo_2 subtitulo_2">Medios</h4>
						<ul className={styles.mediosContainer}>
							<li>Whatsapp : +54 9 341-5989675</li>
							<li>Teléfono : 341 5989675</li>
							<li>
								Facebook :{" "}
								<a
									className="link"
									href="https://www.facebook.com/oreiro1"
									target="_blank"
								>
									Rosario Herrería
								</a>
							</li>
							<li>
								Instagram :{" "}
								<a
									className="link"
									href="https://www.instagram.com/mariooreiro/"
									target="_blank"
								>
									Rosario Herrería
								</a>
							</li>
						</ul>
					</footer>
				</div>
			</div>
		</article>
	);
}
