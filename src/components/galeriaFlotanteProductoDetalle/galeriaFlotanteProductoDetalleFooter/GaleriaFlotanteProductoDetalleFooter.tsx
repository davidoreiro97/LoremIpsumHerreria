"use client";
import React from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import styles from "./galeriaFlotanteProductoDetalleFooter.module.css";
type GaleriaFlotanteFooterProps = {
	indexImgActiva: number;
	urls: string[];
	handleAbrirImagen: (index: number) => void;
};
const GaleriaFlotanteProductoDetalleFooter = ({
	indexImgActiva,
	urls,
	handleAbrirImagen,
}: GaleriaFlotanteFooterProps) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (scrollContainerRef.current) {
			const activeImg = scrollContainerRef.current.querySelector(
				`.${styles.active}`
			);
			if (activeImg) {
				const activeImgRect = activeImg.getBoundingClientRect();
				const containerRect =
					scrollContainerRef.current.getBoundingClientRect();
				const offset =
					activeImgRect.left -
					containerRect.left -
					containerRect.width / 2 +
					activeImgRect.width / 2;
				scrollContainerRef.current.scrollBy({
					left: offset,
					behavior: "smooth",
				});
			}
		}
	}, [indexImgActiva]);
	return (
		<>
			<div className={styles.galeriaFooterContainer}>
				<div
					className={styles.galeriaFooterContainer__scroll}
					ref={scrollContainerRef}
				>
					{urls.map((url, index) => (
						<Image
							className={`${styles.galeriaFooterContainer__scroll__img} ${
								indexImgActiva === index ? styles.active : ""
							}`}
							key={index}
							onClick={() => {
								handleAbrirImagen(index);
							}}
							width={100}
							height={100}
							src={url}
							alt={`Imagen miniatura ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default GaleriaFlotanteProductoDetalleFooter;
