import React from "react";
interface IconProps {
	width: number;
	height: number;
	color: string;
}
export const InicioIcon = ({ width, height, color }: IconProps) => (
	<>
		<svg
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			width={width}
			height={height}
			viewBox="0 0 510 510"
			enableBackground="new 0 0 510 510"
		>
			<g>
				<g id="home">
					<polygon
						fill={color}
						points="204,471.75 204,318.75 306,318.75 306,471.75 433.5,471.75 433.5,267.75 510,267.75 255,38.25 0,267.75 
			76.5,267.75 76.5,471.75"
					/>
				</g>
			</g>
		</svg>
	</>
);
export const ProductosYServiciosIcon = ({
	width,
	height,
	color,
}: IconProps) => (
	<>
		<svg
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 19.25 19.25"
			enableBackground="new 0 0 19.25 19.25"
			xmlSpace="preserve"
			width={width}
			height={height}
		>
			<g>
				<path
					fill={color}
					d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461
				C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124
				c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112
				c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075
				c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7
				C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2
				h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z
				 M13.25,9.625v-2h3.418l-0.285,2H13.25z"
				/>
				<circle fill={color} cx="6.75" cy="17.125" r="1.5" />
				<circle fill={color} cx="15.75" cy="17.125" r="1.5" />
			</g>
		</svg>
	</>
);
export const ContactIcon = ({ width, height, color }: IconProps) => (
	<>
		<svg
			version="1.1"
			baseProfile="tiny"
			id="Layer_1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			x={0}
			y={0}
			width={width}
			height={height}
			fill={color}
			viewBox="0 0 42 42"
			xmlSpace="preserve"
		>
			<path
				d="M15.562,20.766c-1.328-1.922-2.118-4.241-2.281-4.438c1.945-1.356,5.749-3.06,5.962-5.505
	C19.514,7.664,14.162,1.06,13.136,1C10.328,1.03,5.189,5.782,4.58,7.218c-1.132,2.969-0.571,5.732,1.375,9.732
	c2.478,5.95,11.682,17.237,16.947,20.78c3.484,2.674,6.029,3.724,9.068,3.09c1.413-0.268,6.516-4.455,7.027-7.286
	c0.125-1.05-5.807-8.011-8.875-8.287c-2.382-0.22-4.666,3.346-6.303,5.089c-0.163-0.208-1.559-1.297-3.057-3.021
	C18.812,25.266,17,22.859,15.562,20.766z"
			/>
		</svg>
	</>
);
export const HamburgerIcon = ({ width, height, color }: IconProps) => (
	<>
		<svg
			enableBackground="new 0 0 32 32"
			id="Glyph"
			version="1.1"
			viewBox="0 0 32 32"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={width}
			height={height}
			fill={color}
		>
			<path
				d="M29,16c0,1.104-0.896,2-2,2H11c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C28.104,14,29,14.896,29,16z"
				id="XMLID_352_"
			/>
			<path
				d="M29,6c0,1.104-0.896,2-2,2H11C9.896,8,9,7.104,9,6s0.896-2,2-2h16C28.104,4,29,4.896,29,6z"
				id="XMLID_354_"
			/>
			<path
				d="M29,26c0,1.104-0.896,2-2,2H11c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C28.104,24,29,24.896,29,26z"
				id="XMLID_356_"
			/>
			<path
				d="M3,6c0,1.103,0.897,2,2,2s2-0.897,2-2S6.103,4,5,4S3,4.897,3,6z"
				id="XMLID_358_"
			/>
			<path
				d="M3,16c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2S3,14.897,3,16z"
				id="XMLID_360_"
			/>
			<path
				d="M3,26c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2S3,24.897,3,26z"
				id="XMLID_362_"
			/>
		</svg>
	</>
);
export const CloseMenuIcon = ({ width, height, color }: IconProps) => (
	<>
		<svg
			id="Layer_1"
			enableBackground="new 0 0 128 128"
			version="1.1"
			viewBox="0 0 128 128"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={width}
			height={height}
		>
			<style>
				{`
				 .st0{fill:red}
				 .st1{fill:white}`}
			</style>
			<circle className="st0" cx="64" cy="64" r="64" />
			<path
				className="st1"
				d="M100.3,90.4L73.9,64l26.3-26.4c0.4-0.4,0.4-1,0-1.4l-8.5-8.5c-0.4-0.4-1-0.4-1.4,0L64,54.1L37.7,27.8  c-0.4-0.4-1-0.4-1.4,0l-8.5,8.5c-0.4,0.4-0.4,1,0,1.4L54,64L27.7,90.3c-0.4,0.4-0.4,1,0,1.4l8.5,8.5c0.4,0.4,1.1,0.4,1.4,0L64,73.9  l26.3,26.3c0.4,0.4,1.1,0.4,1.5,0.1l8.5-8.5C100.7,91.4,100.7,90.8,100.3,90.4z"
			/>
		</svg>
	</>
);
export const FlechaDerIcon = ({ width, height, color }: IconProps) => (
	<>
		<svg
			width={width}
			height={height}
			viewBox="0 0 7 12"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<g
				id="Icons"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g id="Rounded" transform="translate(-687.000000, -2464.000000)">
					<g id="Hardware" transform="translate(100.000000, 2404.000000)">
						<g
							id="-Round-/-Hardware-/-keyboard_arrow_right"
							transform="translate(578.000000, 54.000000)"
						>
							<g>
								<rect
									id="Rectangle-Copy-105"
									x="0"
									y="0"
									width="24"
									height="24"
								></rect>
								<path
									d="M9.29,15.88 L13.17,12 L9.29,8.12 C8.9,7.73 8.9,7.1 9.29,6.71 C9.68,6.32 10.31,6.32 10.7,6.71 L15.29,11.3 C15.68,11.69 15.68,12.32 15.29,12.71 L10.7,17.3 C10.31,17.69 9.68,17.69 9.29,17.3 C8.91,16.91 8.9,16.27 9.29,15.88 Z"
									fill={color}
								></path>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	</>
);
export const FlechaIzqIcon = ({ width, height, color }: IconProps) => (
	<>
		<svg
			width={width}
			height={height}
			viewBox="0 0 7 12"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<g
				id="Icons"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g id="Rounded" transform="translate(-652.000000, -2464.000000)">
					<g id="Hardware" transform="translate(100.000000, 2404.000000)">
						<g
							id="-Round-/-Hardware-/-keyboard_arrow_left"
							transform="translate(544.000000, 54.000000)"
						>
							<g>
								<rect
									id="Rectangle-Copy-104"
									x="0"
									y="0"
									width="24"
									height="24"
								></rect>
								<path
									d="M14.71,15.88 L10.83,12 L14.71,8.12 C15.1,7.73 15.1,7.1 14.71,6.71 C14.32,6.32 13.69,6.32 13.3,6.71 L8.71,11.3 C8.32,11.69 8.32,12.32 8.71,12.71 L13.3,17.3 C13.69,17.69 14.32,17.69 14.71,17.3 C15.09,16.91 15.1,16.27 14.71,15.88 Z"
									fill={color}
								></path>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	</>
);
export const ReturnIcon = ({ width, height, color }: IconProps) => (
	<>
		<svg
			width={width}
			height={height}
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" fill="white" fillOpacity="0.01" />
			<path
				d="M12.3638 8L5.99981 14.364L12.3638 20.7279"
				stroke={color}
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 14.364L28.6722 14.364C35.557 14.364 41.2122 19.8028 41.4805 26.6824V26.6824C41.7641 33.952 35.9474 40 28.6722 40H12"
				stroke={color}
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	</>
);
