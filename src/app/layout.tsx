import "./global.css";
import { Metadata } from "next";
import { Menu, Footer } from "@/components/index";
export const metadata: Metadata = {
	title: "Rosario Herrería",
	description:
		"Herrería Rosario, Dedicados a la fabricación y reparación de articulos para asados, rejas, muebles industriales, galpones y tinglados entre otros servicios y productos en la ciudad de Rosario, Santa Fe y alrededores",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body>
				<img
					className="gifFondo"
					src="/assets/media/globales/gif/backgroundGlobal.gif"
					alt="gif de fondo"
				/>
				<header>
					{/* Hacer fixed a header. Ver si buscamos el producto con los parámetros, si lo hacemos un componente o que. */}
					{/* <aside>
						<h1>BUSCAR PRODUCTO</h1>
					</aside> */}
					<Menu />
				</header>
				<div className="pageContainer">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
