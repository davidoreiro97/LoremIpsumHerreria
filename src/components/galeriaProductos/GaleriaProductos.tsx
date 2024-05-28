import styles from "./galeriaProductos.module.css";
import React from "react";
import { Producto } from "../../../interfaces/product.interface";
import Link from "next/link";
import MiniSliderProducto from "./miniSliderProducto/MiniSliderProducto";
import NumsPaginacion from "../numsPaginacion/NumsPaginacion";
type Props = {
	productosCategoria: Producto[];
	paginaActual: number;
	totalDePaginas: number;
	categoria: string;
};

const GaleriaProductos = ({
	productosCategoria,
	paginaActual,
	totalDePaginas,
	categoria,
}: Props) => {
	return (
		<>
			<div className={styles.productosContainer}>
				{productosCategoria.map((item, index) => (
					<Link
						href={`/productos-y-servicios/${categoria}/${paginaActual}/${item.id}`}
						key={index}
						className={styles.productoCard}
					>
						<MiniSliderProducto
							urlMiniaturas={item.valores.imagenes.small}
							pagina={paginaActual}
						/>
						<div className={styles.textoProductoContainer}>
							<h3 className={styles.productoCard__titulo}>
								{item.valores.titulo}
							</h3>
							<h4 className={styles.productoCard__precio}>
								Precio : {item.valores.precio}
							</h4>
						</div>
					</Link>
				))}
			</div>
			<NumsPaginacion
				linkBase={`/productos-y-servicios/${categoria}/`}
				totalDePaginas={totalDePaginas}
				paginaActual={paginaActual}
			/>
		</>
	);
};

export default GaleriaProductos;
