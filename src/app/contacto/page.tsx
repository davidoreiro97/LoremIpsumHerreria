import styles from "./page.module.css";
import Image from "next/image";
export default function Contacto() {
	return (
		<>
			<div className={styles.tituloContainer}>
				<h1 className="titulo_2">Haz click para contactar con nosotros!.</h1>
			</div>
			<div className={styles.footerLayout}>
				<ul className={styles.footerLayout__contactoContainer}>
					<li className={styles.footerLayout__contactoContainer__item}>
						<a
							className={styles.footerLayout__contactoContainer__item__texto}
							href="https://wa.me/+5493417533746"
							target="_blank"
							title="+54 9 341 - 5989675"
						>
							<Image
								className={
									styles.footerLayout__contactoContainer__item__texto__img
								}
								src="/assets/media/icons/webp/whatsappFooterIcon.webp"
								alt="Icono whatsapp"
								width={32}
								height={32}
							/>
							+54 9 341-5989675
						</a>
					</li>
					<li className={styles.footerLayout__contactoContainer__item}>
						<a
							className={styles.footerLayout__contactoContainer__item__texto}
							href="https://www.facebook.com/oreiro1"
							title="Mario Oreiro"
							target="_blank"
						>
							<Image
								className={
									styles.footerLayout__contactoContainer__item__texto__img
								}
								src="/assets/media/icons/webp/facebookFooterIcon.webp"
								alt="Icono Facebook"
								width={32}
								height={32}
							/>
							Facebook
						</a>
					</li>
					<li className={styles.footerLayout__contactoContainer__item}>
						<a
							className={styles.footerLayout__contactoContainer__item__texto}
							href="https://www.instagram.com/mariooreiro/"
							title="Mario Oreiro"
							target="_blank"
						>
							<Image
								className={
									styles.footerLayout__contactoContainer__item__texto__img
								}
								src="/assets/media/icons/webp/instagramFooterIcon.webp"
								alt="Icono instagram"
								width={32}
								height={32}
							/>
							Instagram
						</a>
					</li>
					<li className={styles.footerLayout__contactoContainer__item}>
						<a
							className={styles.footerLayout__contactoContainer__item__texto}
							href="mailto:quinanelbarbaro@gmail.com"
							title="quinanelbarbaro@gmail.com"
							target="_blank"
						>
							<Image
								className={
									styles.footerLayout__contactoContainer__item__texto__img
								}
								src="/assets/media/icons/webp/gmailFooterIcon.webp"
								alt="Icono gmail"
								width={32}
								height={32}
							/>
							Gmail
						</a>
					</li>
					<li className={styles.footerLayout__contactoContainer__item}>
						<a
							className={styles.footerLayout__contactoContainer__item__texto}
							title="3417533746"
							target="_blank"
						>
							<Image
								className={
									styles.footerLayout__contactoContainer__item__texto__img
								}
								src="/assets/media/icons/webp/telefonoFooterIcon.webp"
								alt="Icono telefono"
								width={32}
								height={32}
							/>
							3415989675
						</a>
					</li>
				</ul>
				<address className={styles.footerLayout__texto}>
					<span>Uruguay 1368, Rosario, Santa Fe, Argentina</span>
					<iframe
						className={styles.googleMapFooter}
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3980.3361992078385!2d-60.64975860279034!3d-32.976070982317665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abb6c89dbad3%3A0x7facfdddc3255036!2sHerreria!5e0!3m2!1ses-419!2sar!4v1715955726660!5m2!1ses-419!2sar"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</address>
			</div>
		</>
	);
}
