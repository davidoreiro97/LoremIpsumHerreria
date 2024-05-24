"use client";
import React from "react";
import { useRef, useState } from "react";
import styles from "./miniSliderProducto.module.css";
import Image from "next/image";

const MiniSliderProducto = ({ urlMiniaturas }: { urlMiniaturas: string[] }) => {
	let $scrollSlider = useRef<HTMLDivElement>(null);
	const handleClickImg = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
	};
	const handleatrBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		const scrollSlider = $scrollSlider.current;
		const tamañoImg = scrollSlider?.clientWidth;
		if (scrollSlider && tamañoImg) {
			scrollSlider.scrollLeft -= tamañoImg;
		}
	};

	const handlesigBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		const scrollSlider = $scrollSlider.current;
		const tamañoImg = scrollSlider?.clientWidth;
		if (scrollSlider && tamañoImg) {
			scrollSlider.scrollLeft += tamañoImg;
		}
	};
	const [imagenActiva, setImagenActia] = useState(null);
	return (
		<div className={styles.sliderContainer} onClick={handleClickImg}>
			<button className={styles.sliderContainer__atrBtn} onClick={handleatrBtn}>
				Atras
			</button>
			<div className={styles.sliderContainer__scroll} ref={$scrollSlider}>
				{urlMiniaturas.map((item, index) => (
					<Image
						className={styles.productoCard__imagen}
						key={index}
						src={item}
						alt={`Imagen ${index + 1}`}
						width={300}
						height={300}
					/>
				))}
			</div>
			<button className={styles.sliderContainer__sigBtn} onClick={handlesigBtn}>
				Sig
			</button>
		</div>
	);
};

export default MiniSliderProducto;
