"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./miniSliderProducto.module.css";
import { FlechaIzqIcon, FlechaDerIcon } from "../../SvgIcons";
import Image from "next/image";

const MiniSliderProducto = ({
	urlMiniaturas,
	pagina,
}: {
	urlMiniaturas: string[];
	pagina: number;
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	// Reiniciar el índice de la imagen activa cuando cambia la página.
	useEffect(() => {
		setCurrentIndex(0);
	}, [pagina]);

	const [imagenActiva, setImagenActiva] = useState<string>(
		urlMiniaturas[currentIndex]
	);

	useEffect(() => {
		setImagenActiva(urlMiniaturas[currentIndex]);
	}, [currentIndex, urlMiniaturas]);
	const handleatrBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setCurrentIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : urlMiniaturas.length - 1
		);
	};
	const handlesigBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setCurrentIndex((prevIndex) =>
			prevIndex < urlMiniaturas.length - 1 ? prevIndex + 1 : 0
		);
	};
	return (
		<div className={styles.sliderContainer}>
			<button className={styles.sliderContainer__atrBtn} onClick={handleatrBtn}>
				<FlechaIzqIcon width={32} height={32} color="#D06F2A" />
			</button>
			<Image
				className={styles.productoCard__imagen}
				src={imagenActiva}
				alt={`Imagen de producto ${currentIndex}`}
				width={300}
				height={300}
			/>
			<button className={styles.sliderContainer__sigBtn} onClick={handlesigBtn}>
				<FlechaDerIcon width={32} height={32} color="#D06F2A" />
			</button>
		</div>
	);
};

export default MiniSliderProducto;
