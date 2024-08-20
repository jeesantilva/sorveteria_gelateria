import Image from "next/image";
import Link from "next/link";
// importando css
import styles from "./footer.module.css"
// importando imagem
import Logo from "../../../public/logo.png"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container_info_logo}>
                <Image className={styles.logo_footer} src={Logo} />
                <div className={styles.container_info}>
                    <h3>Endereço</h3>
                    <div className={styles.paragrafos}>
                        <p>Av. Bernardino de Campos, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>
                </div>
                <div className={styles.container_info}>
                    <h3>Contato</h3>
                    <div className={styles.paragrafos}>
                        <p>Email: info@meusite.com</p>
                        <p>Tel: (11) 3456-7890</p>
                    </div>
                </div>
                <div className={styles.container_info}>
                    <h3>Horarios</h3>
                    <div className={styles.paragrafos}>
                        <p>Aberto todos os dias</p>
                        <p>Das 10:00 ás 22:00</p>
                    </div>
                </div>

            </div>
            <p className={styles.copyright}>Gelateria. Orgulhosamente desenvolvido por "Jessica Santos"</p>
        </footer>
    )
}