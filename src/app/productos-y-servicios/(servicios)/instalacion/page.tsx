import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
export default function Instalacion() {
	return (
		<article className={styles.categoriaServiciosDetalleContainer}>
			<header>
				<h1 className="titulo_2">Instalaciones</h1>
			</header>
			<div
				className={styles.categoriaServiciosDetalleContainer__imgTextoContainer}
			>
				<Image
					className={
						styles.categoriaServiciosDetalleContainer__imgTextoContainer__img
					}
					src={
						"/assets/media/productosyservicios/servicios/instalaciones/webp/background.webp"
					}
					alt="imagen de instalaciones"
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
						Contamos con servicio de instalación y traslado de los productos al
						lugar. El <span className="textoResaltado"> coste </span> del
						servicio{" "}
						<span className="textoResaltado">
							depende de la distancia del destino hasta nuestra sucursal en
							Rosario.
						</span>
					</p>

					<footer className={styles.footerAsesoramiento}>
						<h4 className="titulo_2 subtitulo_2">Trabajamos en</h4>
						<ul className={styles.mediosContainer}>
							<li>
								Rosario - <span className="textoResaltado">Sucursal</span>
							</li>
							<li>Constitución</li>
							<li>General López</li>
							<li>Caseros</li>
							<li>Belgrano</li>
							<li>Iriondo</li>
							<li>San Lorenzo</li>
							<li>San Jerónimo</li>
							<li>San Martín</li>
							<li>Santa Fe Capital</li>
							<li>
								Te encuentras más lejos?.{" "}
								<a
									className="textoResaltado"
									href="https://wa.me/+5493417533746"
									target="_blank"
								>
									<span className="textoResaltado">Consultanos</span>
								</a>
							</li>
						</ul>
					</footer>
				</div>
			</div>
		</article>
	);
}
