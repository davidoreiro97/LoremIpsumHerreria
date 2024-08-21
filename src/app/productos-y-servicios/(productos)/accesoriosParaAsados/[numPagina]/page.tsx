import fs from "fs";
import path from "path";
import styles from "./page.module.css";
import GaleriaProductos from "@/components/galeriaProductos/GaleriaProductos";

const NUM_PRODUCTOS_POR_PAGINA = 10;
const nombreCategoria = "accesoriosParaAsados";

export async function generateStaticParams() {
	const filePath = path.join(process.cwd(), "public/bdd/productos.json");
	const jsonData = fs.readFileSync(filePath, "utf8");
	const productosSinFiltrar = JSON.parse(jsonData).filas;
	const productosFiltrados = productosSinFiltrar.filter(
		(producto: any) => producto.valores.categoria === nombreCategoria
	);
	const totalDePaginas = Math.ceil(
		productosFiltrados.length / NUM_PRODUCTOS_POR_PAGINA
	);
	return Array.from({ length: totalDePaginas }, (_, index) => ({
		numPagina: (index + 1).toString(),
	}));
}

export default function AccesoriosParaAsados({
	params,
}: {
	params: { numPagina: string };
}) {
	const paginaActual = parseInt(params.numPagina, 10);

	const start = (paginaActual - 1) * NUM_PRODUCTOS_POR_PAGINA;
	const end = start + NUM_PRODUCTOS_POR_PAGINA;

	const filePath = path.join(process.cwd(), "public/bdd/productos.json");
	const jsonData = fs.readFileSync(filePath, "utf8");
	const productosSinFiltrar = JSON.parse(jsonData).filas;
	const productosFiltrados = productosSinFiltrar.filter(
		(producto: any) => producto.valores.categoria === nombreCategoria
	);
	const totalDePaginas = Math.ceil(
		productosFiltrados.length / NUM_PRODUCTOS_POR_PAGINA
	);

	const productosPagina = productosFiltrados.slice(start, end);

	return (
		<div className={styles.tituloContainer}>
			<h1 className="titulo_2">ACCESORIOS PARA ASADOS</h1>
			<GaleriaProductos
				productosCategoria={productosPagina}
				paginaActual={paginaActual}
				totalDePaginas={totalDePaginas}
				categoria={nombreCategoria}
			/>
		</div>
	);
}
