export default function detallesDelProducto({
	params,
}: {
	params: {
		productoID: string
	}
}) {
	return <h1>Detalles del producto {params.productoID}</h1>
}
