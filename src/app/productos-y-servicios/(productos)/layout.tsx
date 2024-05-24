import VolverButton from "@/components/VolverButton/VolverButton";
export const metadata = {
	title: "LoremIpsum Herrería | Productos",
	description: "Productos de LoremIpsum Herrería",
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
