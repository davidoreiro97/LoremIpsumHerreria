import styles from "./page.module.css";
import Image from "next/image";
import imagenesRestauraciones from "../../../../../public/bdd/restauraciones.json";
// import imagenesRestauracion from "./urlImagenesRestauracion.json";
import Galeria from "@/components/Galeria/Galeria";
export default function Instalacion() {
	return (
		<>
			<article className={styles.categoriaServiciosDetalleContainer}>
				<header>
					<h1 className="titulo_2">Restauraciones</h1>
				</header>
				<div
					className={
						styles.categoriaServiciosDetalleContainer__imgTextoContainer
					}
				>
					<Image
						className={
							styles.categoriaServiciosDetalleContainer__imgTextoContainer__img
						}
						src={
							"/assets/media/productosyservicios/servicios/restauraciones/webp/background.webp"
						}
						alt="imagen de restauracion"
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
							Realizamos restauraciones en todo tipo de hierro ya sea a
							domicilio o en nuestra sucursal.
							<div>
								{" "}
								<a
									className="textoResaltado"
									href="https://wa.me/+5493417533746"
									target="_blank"
								>
									<span className="textoResaltado">Consultanos</span>
								</a>{" "}
								para mas informacion.
							</div>
						</p>
					</div>
				</div>
				<section className={styles.trabajosContainer}>
					<h2 className="titulo_2 subtitulo_2">Algunos de nuestros trabajos</h2>
					<Galeria urls={imagenesRestauraciones} />
				</section>
			</article>
		</>
	);
}
