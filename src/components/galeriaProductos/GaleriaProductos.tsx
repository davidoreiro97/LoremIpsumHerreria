import styles from "./galeriaProductos.module.css";
import React from "react";
import productos from "../../../public/bdd/productos.json";
import { Producto } from "../../../interfaces/product.interface";
import Link from "next/link";
import MiniSliderProducto from "./miniSliderProducto/MiniSliderProducto";
import NumsPaginacion from "../numsPaginacion/NumsPaginacion";
type Props = {
	categoria: string;
	numPagina: number;
};

const GaleriaProductos = ({ categoria, numPagina }: Props) => {
	const productosCategoria: Producto[] = productos.filas.filter(
		(item) => item.valores.categoria === categoria
		// Acá se haría la query de tener backend
	);

	const productosPorPagina: number = 10;
	let limiteProdInicial: number = (numPagina - 1) * productosPorPagina;
	let limiteProdFinal: number = limiteProdInicial + productosPorPagina;
	const cantPaginas: number = Math.ceil(
		productosCategoria.length / productosPorPagina
	);

	return (
		<div className={styles.productosYpagContainer}>
			<div className={styles.productosContainer}>
				{productosCategoria
					.slice(limiteProdInicial, limiteProdFinal)
					.map((item, index) => (
						<Link
							href={`/productos-y-servicios/${categoria}/${item.id}`}
							key={index}
							className={styles.productoCard}
						>
							<MiniSliderProducto urlMiniaturas={item.valores.imagenes.small} />
							<div className={styles.textoProductoContainer}>
								<h3 className={styles.productoCard__titulo}>
									{item.valores.titulo}
								</h3>
								<h4 className={styles.productoCard__precio}>
									Precio : {item.valores.precio}
								</h4>
								<span className={styles.productoCard__verBtn}>VER</span>
							</div>
						</Link>
					))}
			</div>
			<NumsPaginacion
				linkBase="/productos-y-servicios/asadores?pag="
				cantPaginas={cantPaginas}
				paginaActual={numPagina}
			/>
		</div>
	);
};

export default GaleriaProductos;
