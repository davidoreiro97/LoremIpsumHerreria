import Link from "next/link";
import Image from "next/image";
import styles from "./categoriaCard.module.css";
type CategoriaCardProps = {
	linkHref: string;
	imgSrc: string;
	imgAlt: string;
	txtLink: string;
};
const CategoriaCard = ({
	linkHref,
	imgSrc,
	imgAlt,
	txtLink,
}: CategoriaCardProps) => {
	return (
		<Link className={styles.categoriaCard} href={linkHref}>
			<Image
				className={styles.categoriaCard__img}
				width={100}
				height={100}
				src={imgSrc}
				alt={imgAlt}
			/>
			<span className={styles.categoriaCard__texto}> {txtLink} </span>
		</Link>
	);
};
export default CategoriaCard;
