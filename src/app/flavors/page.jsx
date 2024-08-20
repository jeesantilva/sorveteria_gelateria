import Image from "next/image";
// importando css
import styles from "./flavors.module.css"
// importando imagens
import Oreo from "../../../public/sabor-oreo.png"
import Pistache from "../../../public/sabor-pistache.png"
import Cookie from "../../../public/sabor-cookies-avela.png"
import Kiwi from "../../../public/sorbet-kiwi.png"
import Morango from "../../../public/sorbet-morango.png"
import Limao from "../../../public/sorbet-limao.png"

export default function Flavors(){
    return(
        <section>
            <div className={styles.banner}>
                <h1>Nossos Sabores</h1>
            </div>
            <main className={styles.container_main}>
                <h2>Sabores de sorvete</h2>
                <div className={styles.container_cards}>
                    <div className={styles.card}>
                        <Image className={styles.img_card} src={Oreo} />
                        <div className={styles.info_card}>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.img_card} src={Pistache} />
                        <div className={styles.info_card}>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.img_card} src={Cookie} />
                        <div className={styles.info_card}>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.img_card} src={Kiwi} />
                        <div className={styles.info_card}>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.img_card} src={Morango} />
                        <div className={styles.info_card}>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.img_card} src={Limao} />
                        <div className={styles.info_card}>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}