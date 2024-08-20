import Image from "next/image";
import Link from "next/link";
// importando css
import styles from "./header.module.css"
// importando imagem
import Logo from "../../../public/logo.png"


export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Image className={styles.logo} src={Logo} />
                <nav className={styles.links}>
                    <Link className={styles.link_nav} href="/">Home</Link>
                    <Link className={styles.link_nav} href="/flavors">Sabores</Link>
                    <Link className={styles.link_nav} href="/about">Sobre</Link>
                </nav>
            </div>
        </header>

    )
}