import { Metadata } from "next";
import VolverButton from "@/components/VolverButton/VolverButton";
type propsParams = {
	params: {
		productoID: string;
	};
};
export const metadata = ({ params }: propsParams): Metadata => {
	return {
		title: `Detalles del producto ${params.productoID}`,
	};
};

export default function DetallesDelProducto({ params }: propsParams) {
	return (
		<>
			<VolverButton rutaVolver="/productos-y-servicios/accesorios-para-parrillas-y-asados" />
			<h1>Detalles del producto {params.productoID}</h1>
		</>
	);
}
