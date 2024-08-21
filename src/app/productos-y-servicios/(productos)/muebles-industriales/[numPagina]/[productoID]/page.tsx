import fs from "fs";
import path from "path";
import { Producto } from "../../../../../../../interfaces/product.interface";
import { notFound } from "next/navigation";
import { GaleriaProductoDetalles } from "@/components/index";
import styles from "./page.module.css";

const nombreCategoria = "muebles-industriales";
const NUM_PRODUCTOS_POR_PAGINA = 10;

export async function generateStaticParams() {
	const filePath = path.join(process.cwd(), "public/bdd/productos.json");
	const jsonData = fs.readFileSync(filePath, "utf8");
	const productosSinFiltrar = JSON.parse(jsonData).filas;

	const productosFiltrados = productosSinFiltrar.filter(
		(producto: any) => producto.valores.categoria === nombreCategoria
	);
	return productosFiltrados.map((producto: any, index: number) => ({
		numPagina: Math.ceil((index + 1) / NUM_PRODUCTOS_POR_PAGINA).toString(),
		productoID: producto.id,
	}));
	// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
}

export default function DetallesDelProducto({
	params,
}: {
	params: {
		numPagina: string;
		productoID: string;
	};
}) {
	const filePath = path.join(process.cwd(), "public/bdd/productos.json");
	const jsonData = fs.readFileSync(filePath, "utf8");
	const productos = JSON.parse(jsonData).filas;

	const producto: Producto | undefined = productos.find(
		(item: any) => item.id === params.productoID
	);

	if (!producto) {
		notFound();
		return null;
	}

	return (
		<div className={styles.galeriaTextoContainer}>
			<GaleriaProductoDetalles
				imagenesProductoDetailed={producto.valores.imagenes.detailed}
			/>
			<div className={styles.galeriaTextoContainer__texto}>
				<h1 className={styles.galeriaTextoContainer__texto__titulo}>
					{producto.valores.titulo}
				</h1>
				<h3 className={styles.galeriaTextoContainer__texto__precio}>
					Precio: {producto.valores.precio}
				</h3>
				<h2>
					<span className={styles.galeriaTextoContainer__texto__detallesTitulo}>
						DETALLES
					</span>
					<pre className={styles.galeriaTextoContainer__texto__descripcion}>
						{producto.valores.descripcion}
					</pre>
				</h2>
			</div>
		</div>
	);
}
