import VolverButton from "@/components/VolverButton/VolverButton";
export const metadata = {
	title: "Rosario Herrería | Productos",
	description: "Productos de Rosario Herrería",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<VolverButton rutaVolver="/productos-y-servicios" />
			{children}
		</>
	);
}
