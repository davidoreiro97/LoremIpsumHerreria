"use client";
import { useRouter } from "next/navigation";
import { ReturnIcon } from "../SvgIcons";
import "./volverButton.css";
const VolverButton = (props: { rutaVolver: string }) => {
	const router = useRouter();
	const handleVolver = () => {
		router.push(`${props.rutaVolver}`);
	};
	return (
		<>
			<button
				className="volverButton"
				type="button"
				onClick={handleVolver}
				title="Volver a Productos y Servicios."
			>
				<ReturnIcon width={48} height={48} color="#FE7D37" />
			</button>
		</>
	);
};
export default VolverButton;
