// Error.tsx
"use client"
import { useEffect } from "react"
export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => {}
}) {
	useEffect(() => {
		console.error(error)
	}, [error])
	return (
		<div>
			<p>Hubo un error en el componente.</p>
			<button
				type='button'
				onClick={() => {
					reset()
				}}
			>
				Reiniciar componente
			</button>
		</div>
	)
}
