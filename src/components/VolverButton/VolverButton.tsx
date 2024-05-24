"use client";
import { useRouter } from "next/navigation";

const VolverButton = (props: { rutaVolver: string }) => {
	const router = useRouter();
	const handleVolver = () => {
		router.push(`${props.rutaVolver}`);
	};
	return (
		<>
			<button type="button" onClick={handleVolver}>
				{"<= Volver"}
			</button>
		</>
	);
};
export default VolverButton;
