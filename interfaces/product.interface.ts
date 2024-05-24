export interface Producto {
	id: string;
	key: string;
	valores: {
		categoria: string;
		titulo: string;
		descripcion: string;
		precio: string;
		imagenes: {
			small: string[];
			detailed: string[];
		};
		tags: string[];
	};
}
