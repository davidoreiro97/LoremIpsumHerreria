"use client";
import "./galeria.css";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import GaleriaFlotante from "../galeriaFlotante/GaleriaFlotante";
import GaleriaFlotanteFooter from "../galeriaFlotante/galeriaFlotanteFooter/GaleriaFlotanteFooter";
type Props = {
	urls: {
		[idImg: string]: {
			miniatura: string;
			detallada: string;
		};
	};
};
const Galeria = ({ urls }: Props) => {
	const [imgActiva, setImgActiva] = useState<null | number>(null);
	function handleAbrirImagen(indexImgActiva: number) {
		setImgActiva(indexImgActiva);
	}
	function onClose() {
		setImgActiva(null);
	}
	function handleSig(indexImgActiva: number) {
		if (indexImgActiva < Object.keys(urls).length - 1) {
			setImgActiva(indexImgActiva + 1);
		}
	}
	function handleAtr(indexImgActiva: number) {
		if (indexImgActiva > 0) {
			setImgActiva(indexImgActiva - 1);
		}
	}
	return (
		<>
			<div className="galeriaContainer">
				{Object.entries(urls).map(([idImg, url], index) => (
					<Image
						className="galeriaContainer__imgMiniatura"
						key={idImg}
						onClick={() => {
							handleAbrirImagen(index);
						}}
						width={250}
						height={250}
						src={url.miniatura}
						alt={`Imagen miniatura ${index + 1}`}
					/>
				))}
			</div>
			{imgActiva !== null && (
				<div className="galeriaFlotante">
					<GaleriaFlotante
						indexImgActiva={imgActiva}
						urls={urls}
						onClose={onClose}
						handleSig={handleSig}
						handleAtr={handleAtr}
					/>
					<GaleriaFlotanteFooter
						indexImgActiva={imgActiva}
						urls={urls}
						handleAbrirImagen={handleAbrirImagen}
					/>
				</div>
			)}
		</>
	);
};

export default Galeria;
