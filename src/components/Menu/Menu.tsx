"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import "./menu.css";
import {
	InicioIcon,
	ProductosYServiciosIcon,
	ContactIcon,
	HamburgerIcon,
	CloseMenuIcon,
} from "../SvgIcons";
const Menu = () => {
	const [responsiveMenuOpen, setResponsiveMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false); //Scroll del menu
	const menuRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		//Para cerrar el menú
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setResponsiveMenuOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	useEffect(() => {
		//Para el scroll del menú
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const activeColor = "#FE7D37";
	const pathname = usePathname();
	return (
		<nav
			className={isScrolled ? "menuContainer scrolled" : "menuContainer"}
			ref={menuRef}
		>
			<button
				type="button"
				className="buttonMenu"
				onClick={() => {
					setResponsiveMenuOpen(!responsiveMenuOpen);
				}}
			>
				{responsiveMenuOpen ? (
					<CloseMenuIcon width={36} height={36} color="orange" />
				) : (
					<HamburgerIcon width={36} height={36} color="#e3dad3" />
				)}
				{responsiveMenuOpen ? "CERRAR" : "MENU"}
			</button>
			<Link
				href="/"
				className={`menuContainer__item ${
					pathname === "/" ? "activeSection" : ""
				} ${responsiveMenuOpen ? "flexVisible" : ""}`}
				onClick={() => {
					setResponsiveMenuOpen(false);
				}}
			>
				<InicioIcon
					width={36}
					height={36}
					color={pathname === "/" ? `${activeColor}` : "#e3dad3"}
				/>
				INICIO
			</Link>
			<Link
				href="/productos-y-servicios"
				className={`menuContainer__item ${
					pathname === "/productos-y-servicios" ||
					pathname.startsWith("/productos-y-servicios/")
						? "activeSection"
						: ""
				}  ${responsiveMenuOpen ? "flexVisible" : ""}`}
				onClick={() => {
					setResponsiveMenuOpen(false);
				}}
			>
				<ProductosYServiciosIcon
					width={36}
					height={36}
					color={
						pathname === "/productos-y-servicios" ||
						pathname.startsWith("/productos-y-servicios/")
							? `${activeColor}`
							: "#e3dad3"
					}
				/>
				PRODUCTOS Y<br />
				SERVICIOS
			</Link>
			<Link
				href="/contacto"
				className={`menuContainer__item ${
					pathname === "/contacto" ? "activeSection" : ""
				}  ${responsiveMenuOpen ? "flexVisible" : ""}`}
				onClick={() => {
					setResponsiveMenuOpen(false);
				}}
			>
				<ContactIcon
					width={36}
					height={36}
					color={pathname === "/contacto" ? `${activeColor}` : "#e3dad3"}
				/>
				CONTACTO
			</Link>
		</nav>
	);
};
export default Menu;
