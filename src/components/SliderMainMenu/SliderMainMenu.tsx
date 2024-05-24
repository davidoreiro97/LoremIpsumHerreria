"use client";
import React, { useEffect } from "react";
import "./SliderMainMenu.css";
import { FlechaIzqIcon, FlechaDerIcon } from "../SvgIcons";
const SliderMainMenu = () => {
	useEffect(() => {
		let $botonAtras = document.getElementById("AtrasBtn");
		let $botonSig = document.getElementById("SigBtn");
		let $sliderContainer = document.getElementById("sliderContainer");
		// Botones INICIO
		if ($botonAtras && $botonSig && $sliderContainer) {
			$botonAtras.addEventListener("click", () => {
				$sliderContainer.scrollBy({
					left: -$sliderContainer.clientWidth,
					behavior: "smooth",
				});
			});
			$botonSig.addEventListener("click", () => {
				$sliderContainer.scrollBy({
					left: $sliderContainer.clientWidth,
					behavior: "smooth",
				});
				// Calcula el índice de la diapositiva actual
				let slideIndex = Math.round(
					$sliderContainer.scrollLeft / $sliderContainer.clientWidth
				);
				if (slideIndex + 1 === bullets.length) {
					$sliderContainer.scrollTo({
						left: 0,
						behavior: "smooth",
					});
				}
			});
			// Botones FIN
			// Bullets INICIO
			let bullets = document.querySelectorAll(".bullets .bullet");
			bullets.forEach((bullet) => {
				bullet.addEventListener("click", (e) => {
					let slideIndex = parseInt(bullet.id) - 1;
					let slideWidth = $sliderContainer.clientWidth;
					$sliderContainer.scrollTo({
						left: slideIndex * slideWidth,
						behavior: "smooth",
					});
					clearInterval(desplazarAnimacion);
				});
			});

			$sliderContainer.addEventListener("scroll", (e) => {
				// Calcula el índice de la diapositiva actual
				let slideIndex = Math.round(
					$sliderContainer.scrollLeft / $sliderContainer.clientWidth
				);
				// Elimina la clase active de todos los bullets
				bullets.forEach((bullet) => {
					bullet.classList.remove("active");
				});
				// Agrega la clase active al bullet correspondiente a la diapositiva actual
				bullets[slideIndex].classList.add("active");
			});
			// Bullets FIN
			// Animacion INICIO
			let counter = 1;
			let desplazarAnimacion = setInterval(() => {
				let slideWidth = $sliderContainer.clientWidth;
				$sliderContainer.scrollTo({
					left: counter * slideWidth,
					behavior: "smooth",
				});
				counter++;
				if (counter === bullets.length) {
					counter = 0;
				}
			}, 10000);

			let $sliderYBotonesContainer = document.querySelector(
				".sliderYBotonesContainer"
			);
			if ($sliderYBotonesContainer) {
				$sliderYBotonesContainer.addEventListener("click", () => {
					clearInterval(desplazarAnimacion);
				});
			}
			// Animacion FIN
		}
	}, []);
	return (
		<div className="sliderMainContainer">
			<div className="sliderYBotonesContainer">
				<div id="AtrasBtn" className="AtrasBtn">
					<FlechaIzqIcon width={48} height={48} color="#D06F2A" />
				</div>
				<section id="sliderContainer" className="sliderContainer">
					<div className="sliderContainer__slide">
						<img
							src="/assets/media/inicio/webp/slide_asado.webp"
							alt="Imagen de asado en el slider"
						/>
						<div className="sliderContainer__slide__text">
							<h2 className="sliderContainer__slide__text__title">
								¿ Con ganas de un asado inolvidable ?
							</h2>
							<p className="sliderContainer__slide__text__desc">
								Conocé nuestros asadores y sus productos asociados en nuestra
								sección de productos y servicios, tenemos todo tipo de asadores,
								estacas, palitas, atizadores, etc... Y si no lo tenemos, lo
								hacemos a tu medida.{" "}
								<span className="textoResaltado">
									Consultá la sección de "Diseña tu producto" para hacer una
									maqueta de tu parrillero.{" "}
								</span>
							</p>
						</div>
					</div>
					<div className="sliderContainer__slide">
						<img src="/assets/media/inicio/webp/slide_rejas.webp" alt="Rejas" />
						<div className="sliderContainer__slide__text">
							<h2 className="sliderContainer__slide__text__title">Rejas</h2>
							<p className="sliderContainer__slide__text__desc">
								¿Necesitas rejas para mantener seguro tu hogar?, hacemos rejas
								de todo tipo y tamaño, desde rejas para puertas y ventanas hasta
								rejas para medidores de gas. Puede ver algunos de{" "}
								<span className="textoResaltado">
									nuestros mejores trabajos en la sección de "Rejas".
								</span>
							</p>
						</div>
					</div>
					<div className="sliderContainer__slide">
						<img
							src="/assets/media/inicio/webp/slide_galpones.webp"
							alt="Galpones"
						/>
						<div className="sliderContainer__slide__text">
							<h2 className="sliderContainer__slide__text__title">Galpones</h2>
							<p className="sliderContainer__slide__text__desc">
								Realizamos el presupesto y armado de galpones y tinglados en el
								lugar de trabajo. Puede ver algúnos de{" "}
								<span className="textoResaltado">
									nuestros mejores trabajos realizados en la sección de
									"Galpones".
								</span>
							</p>
						</div>
					</div>
					<div className="sliderContainer__slide">
						<img
							src="/assets/media/inicio/webp/slide_muebInds.webp"
							alt="Muebles industriales"
						/>
						<div className="sliderContainer__slide__text">
							<h2 className="sliderContainer__slide__text__title">
								Muebles industriales
							</h2>
							<p className="sliderContainer__slide__text__desc">
								Armamos ,trasladamos e instalamos de requerirlo cualquier tipo
								de mueble industrial. Puede
								<span className="textoResaltado">
									{" "}
									consultar los muebles industriales en stock en la sección de
									"Muebles Ind."
								</span>
								, en caso de requerir uno personalizado consultenos con una
								maqueta de referencia.
							</p>
						</div>
					</div>
					<div className="sliderContainer__slide">
						<img
							src="/assets/media/inicio/webp/slide_servicios.webp"
							alt="Servicios"
						/>
						<div className="sliderContainer__slide__text">
							<h2 className="sliderContainer__slide__text__title">SERVICIOS</h2>
							<p className="sliderContainer__slide__text__desc">
								Asesoramiento, instalaciones, mantenimiento y restauracion sobre
								todo tipo de estructura de hierro.{" "}
								<span className="textoResaltado">
									{" "}
									El traslado de los productos y trabajos a domicilio tienen un
									coste extra
								</span>{" "}
								por el mismo dependiendo de que tan lejos se encuentre de
								nuestra sucursal en Rosario.
							</p>
						</div>
					</div>
				</section>
				<div id="SigBtn" className="SigBtn">
					<FlechaDerIcon width={48} height={48} color="#D06F2A" />
				</div>
			</div>
			<div className="bullets">
				<div id="1" className="bullet active"></div>
				<div id="2" className="bullet"></div>
				<div id="3" className="bullet"></div>
				<div id="4" className="bullet"></div>
				<div id="5" className="bullet"></div>
			</div>
		</div>
	);
};
export default SliderMainMenu;
