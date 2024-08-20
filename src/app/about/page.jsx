import Image from "next/image";
// importando css
import styles from "./about.module.css"
// importando imagens
import Friends from "../../../public/sobre-image.jpg"
import Sorveteria from "../../../public/sorveteria.jpg"

export default function About() {
    return (
        <section>
            <div className={styles.banner}>
                <h1>A gelateria</h1>
            </div>
            <main className={styles.main_content}>
                <div className={styles.text_about}>
                    <h2>Sobre Nós</h2>
                    <h3>Nós simplesmente amamos sorvete!</h3>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </div>
                <div className={styles.img_about}>
                    <Image className={styles.img} src={Friends} />
                    <Image className={styles.img} src={Sorveteria} />
                </div>

            </main>
        </section>
    )
}