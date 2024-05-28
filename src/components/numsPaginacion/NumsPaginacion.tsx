import React from "react";
import Link from "next/link";
import styles from "./numsPaginacion.module.css";
type NumPaginacionProps = {
	linkBase: string;
	totalDePaginas: number;
	paginaActual: number;
};

const NumsPaginacion = ({
	linkBase,
	totalDePaginas,
	paginaActual,
}: NumPaginacionProps) => {
	return (
		<div className={styles.numsContainer}>
			{Array.from({ length: totalDePaginas }, (_, i) => (
				<Link
					key={i}
					className={
						paginaActual === i + 1 ? styles.activePage : styles.pageNum
					}
					href={`${linkBase}${i + 1}`}
				>
					{i + 1}
				</Link>
			))}
		</div>
	);
};

export default NumsPaginacion;
