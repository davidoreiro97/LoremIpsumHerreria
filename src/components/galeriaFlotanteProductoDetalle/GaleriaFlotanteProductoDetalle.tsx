"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./galeriaFlotanteProductoDetalle.css";
import { FlechaIzqIcon, FlechaDerIcon, CloseMenuIcon } from "../SvgIcons";
type GaleriaFlotanteProps = {
	indexImgActiva: number;
	urls: string[];
	onClose: () => void;
	handleSig: (index: number) => void;
	handleAtr: (index: number) => void;
};

const GaleriaFlotanteProductoDetalle = ({
	indexImgActiva,
	urls,
	onClose,
	handleSig,
	handleAtr,
}: GaleriaFlotanteProps) => {
	useEffect(() => {
		setUrlImgActiva(urls[indexImgActiva]);
	}, [indexImgActiva]);

	const [urlImgActiva, setUrlImgActiva] = useState<string>(
		urls[indexImgActiva]
	);

	return (
		<div className="imagenDetalladaActivaContainer">
			<button
				className="imagenDetalladaActivaContainer__cerrarBtn"
				onClick={onClose}
				title="Cerrar"
			>
				<CloseMenuIcon width={48} height={48} color=""></CloseMenuIcon>
			</button>
			<Image
				className="imagenDetalladaActivaContainer__img"
				src={urlImgActiva}
				alt={`Imagen detallada ${indexImgActiva + 1}`}
				width={800}
				height={800}
			/>
			<div className="imagenDetalladaActivaContainer__btnsContainer">
				<button
					className="imagenDetalladaActivaContainer__atrasBtn"
					onClick={() => {
						handleAtr(indexImgActiva);
					}}
					title="Anterior imagen"
				>
					<FlechaIzqIcon width={48} height={48} color="#D06F2A" />
				</button>
				<button
					className="imagenDetalladaActivaContainer__sigBtn"
					onClick={() => {
						handleSig(indexImgActiva);
					}}
					title="Siguiente imagen"
				>
					<FlechaDerIcon width={48} height={48} color="#D06F2A" />
				</button>
			</div>
		</div>
	);
};

export default GaleriaFlotanteProductoDetalle;
