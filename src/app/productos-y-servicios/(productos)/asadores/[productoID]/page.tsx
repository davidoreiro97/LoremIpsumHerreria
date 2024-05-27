import productos from "../../../../../../public/bdd/productos.json";
import { Producto } from "../../../../../../interfaces/product.interface";
import { notFound } from "next/navigation";
import { GaleriaProductoDetalles } from "@/components/index";
import styles from "./page.module.css";
export async function generateStaticParams() {
	return productos.filas.map((item) => ({
		productoID: item.id,
	}));
}

export default function detallesDelProducto({
	params,
}: {
	params: {
		productoID: string;
	};
}) {
	const producto: Producto[] = productos.filas.filter(
		(item) => item.id === params.productoID
	);

	if (!producto) {
		notFound();
		return null;
	}
	return (
		<div className={styles.galeriaTextoContainer}>
			<GaleriaProductoDetalles
				imagenesProductoDetailed={producto[0].valores.imagenes.detailed}
			/>
			<div className={styles.galeriaTextoContainer__texto}>
				<h1 className={styles.galeriaTextoContainer__texto__titulo}>
					{producto[0].valores.titulo}
				</h1>
				<h3 className={styles.galeriaTextoContainer__texto__precio}>
					Precio: {producto[0].valores.precio}
				</h3>
				<h2>
					<span className={styles.galeriaTextoContainer__texto__detallesTitulo}>
						DETALLES
					</span>
					<pre className={styles.galeriaTextoContainer__texto__descripcion}>
						{producto[0].valores.descripcion}
					</pre>
				</h2>
			</div>
		</div>
	);
}
