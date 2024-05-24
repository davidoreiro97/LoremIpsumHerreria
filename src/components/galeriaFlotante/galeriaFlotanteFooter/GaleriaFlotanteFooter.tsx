"use client";
import React from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import "./galeriaFlotanteFooter.css";
type GaleriaFlotanteFooterProps = {
	indexImgActiva: number;
	urls: {
		[idImg: string]: {
			miniatura: string;
			detallada: string;
		};
	};
	handleAbrirImagen: (index: number) => void;
};
const GaleriaFlotanteFooter = ({
	indexImgActiva,
	urls,
	handleAbrirImagen,
}: GaleriaFlotanteFooterProps) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (scrollContainerRef.current) {
			const activeImg = scrollContainerRef.current.querySelector(".active");
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
			<div className="galeriaFooterContainer">
				<div
					className="galeriaFooterContainer__scroll"
					ref={scrollContainerRef}
				>
					{Object.entries(urls).map(([idImg, url], index) => (
						<Image
							className={`galeriaFooterContainer__scroll__img ${
								indexImgActiva === index ? "active" : ""
							}`}
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
			</div>
		</>
	);
};

export default GaleriaFlotanteFooter;
