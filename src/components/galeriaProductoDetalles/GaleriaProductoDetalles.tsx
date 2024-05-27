"use client";
import styles from "./galeriaProductoDetalles.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import GaleriaFlotanteProductoDetalle from "../galeriaFlotanteProductoDetalle/GaleriaFlotanteProductoDetalle";
import GaleriaFlotanteProductoDetalleFooter from "../galeriaFlotanteProductoDetalle/galeriaFlotanteProductoDetalleFooter/GaleriaFlotanteProductoDetalleFooter";
import React from "react";
type GaleriaProductoDetallesProps = {
	imagenesProductoDetailed: string[];
};

const GaleriaProductoDetalles = ({
	imagenesProductoDetailed,
}: GaleriaProductoDetallesProps) => {
	const [imgActiva, setImgActiva] = useState<null | number>(null);
	function handleAbrirImagen(indexImgActiva: number) {
		setImgActiva(indexImgActiva);
	}
	function onClose() {
		setImgActiva(null);
	}
	function handleSig(indexImgActiva: number) {
		if (indexImgActiva < imagenesProductoDetailed.length - 1) {
			setImgActiva(indexImgActiva + 1);
		}
	}
	function handleAtr(indexImgActiva: number) {
		if (indexImgActiva > 0) {
			setImgActiva(indexImgActiva - 1);
		}
	}
	const masDe4Imagenes = imagenesProductoDetailed.length > 4 && true;

	return (
		<div className={styles.imgYgaleriaMinContainer}>
			<div className={styles.imgYgaleriaMinContainer__galeriaMin}>
				{/* Mostrar 4 imagenes en miniatura acá, hacer otro componente de última, a la 5ta ponerle un texto que diga (imagenesProductoDetailed.lenght - 4) + y al clickearla abrir el slider*/}
				{masDe4Imagenes
					? imagenesProductoDetailed
							.slice(0, 4)
							.map((urlImg, index) => (
								<Image
									key={index}
									className={styles.imgYgaleriaMinContainer__galeriaMin__img}
									src={urlImg}
									width={100}
									height={100}
									alt="Imagen miniatura del producto"
									onClick={() =>
										handleAbrirImagen(imagenesProductoDetailed.indexOf(urlImg))
									}
								/>
							))
					: imagenesProductoDetailed.map((urlImg, index) => (
							<Image
								className={styles.imgYgaleriaMinContainer__galeriaMin__img}
								src={urlImg}
								key={index}
								width={100}
								height={100}
								alt="Imagen miniatura del producto"
								onClick={() =>
									handleAbrirImagen(imagenesProductoDetailed.indexOf(urlImg))
								}
							/>
					  ))}
				{masDe4Imagenes && (
					<span
						className={styles.imgYgaleriaMinContainer__galeriaMin__MasImgBtn}
						onClick={() =>
							handleAbrirImagen(
								imagenesProductoDetailed.indexOf(imagenesProductoDetailed[4])
							)
						}
					>
						{`${imagenesProductoDetailed.length - 4}+`}
					</span>
				)}
			</div>

			<Image
				className={styles.imgYgaleriaMinContainer__img}
				width={500}
				height={500}
				alt="Imagen detallada del producto"
				src={imagenesProductoDetailed[0]}
				onClick={() =>
					handleAbrirImagen(
						imagenesProductoDetailed.indexOf(imagenesProductoDetailed[0])
					)
				}
			/>

			{imgActiva !== null && (
				<div className={styles.galeriaFlotante}>
					<GaleriaFlotanteProductoDetalle
						indexImgActiva={imgActiva}
						urls={imagenesProductoDetailed}
						onClose={onClose}
						handleSig={handleSig}
						handleAtr={handleAtr}
					/>
					{
						<GaleriaFlotanteProductoDetalleFooter
							indexImgActiva={imgActiva}
							urls={imagenesProductoDetailed}
							handleAbrirImagen={handleAbrirImagen}
						/>
					}
				</div>
			)}
		</div>
	);
};

export default GaleriaProductoDetalles;
