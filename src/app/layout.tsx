import "./global.css";
import { Metadata } from "next";
import { Menu, Footer } from "@/components/index";

export const metadata: Metadata = {
	title:
		"Rosario Herrería - Fabricación y Reparación de Artículos para Asados y Más",
	description:
		"Herrería Rosario, dedicada a la fabricación y reparación de artículos para asados, rejas, muebles industriales, galpones y tinglados. Servicios y productos personalizados en Rosario, Santa Fe y alrededores.",
	keywords: [
		"herrería Rosario",
		"fabricación de rejas",
		"artículos para asados",
		"muebles industriales Rosario",
		"galpones y tinglados Rosario",
		"personalización de productos de herrería",
		"reparación de muebles industriales",
		"reparación de rejas",
		"servicios de herrería en Rosario",
	],
	authors: [
		{ name: "David Oreiro", url: "https://davidoreiro97.github.io/portfolio/" },
	],
	viewport: "width=device-width, initial-scale=1.0",
	robots: "index, follow",
	openGraph: {
		title:
			"Rosario Herrería - Fabricación y Reparación de Artículos para Asados y Más",
		description:
			"Herrería Rosario, dedicada a la fabricación y reparación de artículos para asados, rejas, muebles industriales, galpones y tinglados. Servicios y productos personalizados en Rosario, Santa Fe y alrededores.",
		type: "website",
		locale: "es_ES",
		url: "https://www.rosarioherreria.com", // Reemplazarlo con la url una vez subido a gh.
		siteName: "Rosario Herrería",
		images: [
			{
				url: "/assets/media/globales/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Rosario Herrería",
			},
		],
	},
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
					<Menu />
				</header>
				<div className="pageContainer">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
