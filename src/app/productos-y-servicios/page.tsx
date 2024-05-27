import Link from "next/link";
import styles from "./page.module.css";
import { CategoriaCard } from "@/components/index";
import { VolverButton } from "@/components/index";
export default function ProductosyServicios() {
	return (
		<>
			<div className={styles.productosYServiciosContainer}>
				<div
					className={styles.productosYServiciosContainer__categoriasContainer}
				>
					<section className="categoriasContainer">
						<h1 className="titulo_1">PRODUCTOS</h1>
						<div className={styles.categoriasContainer__itemsContainer}>
							<CategoriaCard
								linkHref="/productos-y-servicios/asadores?pag=1"
								imgSrc="/assets/media/icons/webp/asadoresIcon.webp"
								imgAlt="Imagen asadores"
								txtLink="ASADORES"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/accesoriosParaAsados"
								imgSrc="/assets/media/icons/webp/accesoriosParrillasIcon.webp"
								imgAlt="Imagen accesorios para asados"
								txtLink="ACCESORIOS PARA ASADOS"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/rejas"
								imgSrc="/assets/media/icons/webp/rejasIcon.webp"
								imgAlt="Imagen de icono de rejas"
								txtLink="REJAS"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/escaleras-en-hierro"
								imgSrc="/assets/media/icons/webp/escalerasIcon.webp"
								imgAlt="Imagen escaleras"
								txtLink="ESCALERAS"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/barandas-y-pasamanos"
								imgSrc="/assets/media/icons/webp/barandasYPasamanosIcon.webp"
								imgAlt="Imagen escaleras"
								txtLink="BARANDAS Y PASAMANOS"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/muebles-industriales"
								imgSrc="/assets/media/icons/webp/mueblesIndustrialesIcon.webp"
								imgAlt="Icono barandas y pasamanos"
								txtLink="MUEBLES INDUSTRIALES"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/mobiliario-urbano"
								imgSrc="/assets/media/icons/webp/mobiliarioUrbanoIcon.webp"
								imgAlt="Imagen mobiliario urbano"
								txtLink="MOBILIARIO URBANO"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/galpones-y-tinglados"
								imgSrc="/assets/media/icons/webp/galponesIcon.webp"
								imgAlt="Imagen de galpones"
								txtLink="GALPONES Y TING."
							/>
						</div>
					</section>
					<section className={styles.categoriasContainer}>
						<h1 className="titulo_1">SERVICIOS</h1>
						<div className={styles.categoriasContainer__itemsContainer}>
							<CategoriaCard
								linkHref="/productos-y-servicios/asesoramiento"
								imgSrc="/assets/media/icons/webp/asesoramientoIcon.webp"
								imgAlt="Imagen asesoramiento"
								txtLink="ASESORAMIENTO"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/instalacion"
								imgSrc="/assets/media/icons/webp/instalacionIcon.webp"
								imgAlt="Imagen instalacion"
								txtLink="INSTALACIONES"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/restauraciones"
								imgSrc="/assets/media/icons/webp/restauracionIcon.webp"
								imgAlt="Imagen restauración"
								txtLink="RESTAURACIONES"
							/>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
