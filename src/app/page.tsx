"use client";
import styles from "./page.module.css";
import { CategoriaCard, SliderMainMenu } from "@/components/index";
import Image from "next/image";
export default function Inicio() {
	return (
		<>
			<main className={styles.inicioMain}>
				<section className={styles.inicioPrimerSection}>
					<Image
						className={styles.inicioPrimerSection__banner}
						src="/assets/media/inicio/webp/banner.png"
						alt="Imagen de banner"
						width={1024}
						height={150}
					/>
					<h1 className={styles.inicioPrimerSection__titulo}>
						Dedicados a la <span className="textoResaltado">fabricación </span>{" "}
						y reparación de{" "}
						<span className="textoResaltado">
							rejas, muebles industriales, galpones, tinglados y herrería naval
						</span>{" "}
						entre otros servicios y productos en la ciudad de{" "}
						<span className="textoResaltado">Rosario, Santa Fe </span>y
						alrededores.
					</h1>
					<div className={styles.prodYServiciosContainer}>
						<CategoriaCard
							linkHref="/productos-y-servicios/asadores/1"
							imgSrc="/assets/media/icons/webp/asadoresIcon.webp"
							imgAlt="Icono asadores"
							txtLink="ASADORES"
						/>
						<CategoriaCard
							linkHref="/productos-y-servicios/rejas"
							imgSrc="/assets/media/icons/webp/rejasIcon.webp"
							imgAlt="Icono rejas"
							txtLink="REJAS"
						/>
						<CategoriaCard
							linkHref="/productos-y-servicios/muebles-industriales/1"
							imgSrc="/assets/media/icons/webp/mueblesIndustrialesIcon.webp"
							imgAlt="Imagen de muebles industriales."
							txtLink="MUEBLES IND."
						/>
						<CategoriaCard
							linkHref="/productos-y-servicios/galpones-y-tinglados"
							imgSrc="/assets/media/icons/webp/galponesIcon.webp"
							imgAlt="Imagen de galpones."
							txtLink="GALPONES"
						/>
						<CategoriaCard
							linkHref="/productos-y-servicios"
							imgSrc="/assets/media/icons/webp/otrosProductosIcon.webp"
							imgAlt="Imagen de otros productos."
							txtLink="OTROS PRODUCTOS"
						/>
					</div>
					<SliderMainMenu />
				</section>

				<section className={styles.descAmpliadaContainer}>
					<div
						className={styles.descAmpliadaContainer__tituloSubtituloContainer}
					>
						<h2
							className={
								styles.descAmpliadaContainer__tituloSubtituloContainer__titulo
							}
						>
							LoremIpsum Herrería
						</h2>
						<h2
							className={
								styles.descAmpliadaContainer__tituloSubtituloContainer__subtitulo
							}
						>
							Brindamos soluciones a medida, productos totalmente personalizados
						</h2>
					</div>
					<p className={styles.descAmpliadaContainer__texto}>
						Somos una empresa de la ciudad de Argentina, Santa Fe, Rosario
						dedicada a la fabricación y restauración de articulos para asadores,
						rejas, muebles industriales, galpones, tinglados y herrería naval
						entre otros servicios y productos que ofrecemos. Nos basamos en el
						asesoramiento al cliente, la venta sin intermediarios y la
						personalización de los productos de nuestros clientes.
						<br />
						Con más de 40 años en el rubro, y una cantidad importante de
						clientes satisfechos en todo el país, podemos brindarle la solución
						a medida de su necesidad.
					</p>
				</section>

				<div className={styles.prodServUbicacionContainer}>
					<section className={styles.sectionContainer}>
						<h2 className="titulo_1">PRODUCTOS</h2>
						<div className={styles.prodYServiciosContainer}>
							<CategoriaCard
								linkHref="/productos-y-servicios/asadores/1"
								imgSrc="/assets/media/icons/webp/asadoresIcon.webp"
								imgAlt="Icono asadores"
								txtLink="ASADORES"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/accesoriosParaAsados/1"
								imgSrc="/assets/media/icons/webp/accesoriosParrillasIcon.webp"
								imgAlt="Imagen accesorios para asados"
								txtLink="ACCESORIOS PARA ASADOS"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/rejas"
								imgSrc="/assets/media/icons/webp/rejasIcon.webp"
								imgAlt="Icono rejas"
								txtLink="REJAS"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/muebles-industriales/1"
								imgSrc="/assets/media/icons/webp/mueblesIndustrialesIcon.webp"
								imgAlt="Imagen de muebles industriales."
								txtLink="MUEBLES IND."
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/galpones-y-tinglados"
								imgSrc="/assets/media/icons/webp/galponesIcon.webp"
								imgAlt="Imagen de galpones."
								txtLink="GALPONES"
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
								imgAlt="Imagen barandas y pasamanos"
								txtLink="BARANDAS Y PASAMANOS"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/mobiliario-urbano"
								imgSrc="/assets/media/icons/webp/mobiliarioUrbanoIcon.webp"
								imgAlt="Imagen mobiliario urbano"
								txtLink="MOBILIARIO URBANO"
							/>
						</div>
					</section>

					<section className={styles.sectionContainer}>
						<h2 className="titulo_1">SERVICIOS</h2>
						<div className={styles.prodYServiciosContainer}>
							<CategoriaCard
								linkHref="/productos-y-servicios/asesoramiento/"
								imgSrc="/assets/media/icons/webp/asesoramientoIcon.webp"
								imgAlt="Imagen asesoramiento"
								txtLink="ASESORAMIENTO"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/instalacion/"
								imgSrc="/assets/media/icons/webp/instalacionIcon.webp"
								imgAlt="Imagen asesoramiento"
								txtLink="INSTALACIONES"
							/>
							<CategoriaCard
								linkHref="/productos-y-servicios/restauraciones/"
								imgSrc="/assets/media/icons/webp/restauracionIcon.webp"
								imgAlt="Imagen asesoramiento"
								txtLink="RESTAURACIONES"
							/>
						</div>
					</section>

					<section className={styles.sectionContainer}>
						<h2 className="titulo_1">TRABAJAMOS EN</h2>
						<div className={styles.ubicacionesContainer__mapaYtextoContainer}>
							<ul
								className={
									styles.ubicacionesContainer__mapaYtextoContainer__texto
								}
							>
								<li>
									Rosario - Uruguay 1368{" "}
									<span className="textoResaltado">Sucursal</span>
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
							<Image
								className={
									styles.ubicacionesContainer__mapaYtextoContainer__mapa
								}
								src="/assets/media/inicio/webp/mapa-santa-fe.webp"
								alt="Imagen de mapa"
								width={576}
								height={761}
							/>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
