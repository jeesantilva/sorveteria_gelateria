import Image from "next/image";
import styles from "./page.module.css";

// importando imagens
import Sabores from "../../public/banner-sabores.jpg"
import Evento from "../../public/eventos-image.jpg"
import Sobre from "../../public/sobre-image.jpg"


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.capa}>
        <div className={styles.banner}>
          <h1>Sorvete Artesenal</h1>
        </div>
      </div>
      <section className={styles.container_content_main}>
        <div className={styles.content_main}>
          <Image className={styles.img_content_main} src={Sabores} />
          <div>
            <h2>Nossos Sabores</h2>
            <span className={styles.pg_italic}>Novos e deliciosos!</span>
            <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
          </div>
        </div>
        <div className={styles.content_main}>
          <div>
            <h2>Nossos Eventos</h2>
            <span className={styles.pg_italic}>Delicias com sorvete!</span>
            <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
          </div>
          <Image className={styles.img_content_main} src={Evento} />
        </div>
        <div className={styles.content_main}>
          <Image className={styles.img_content_main} src={Sobre} />
          <div>
            <h2>Sobre Nós</h2>
            <span className={styles.pg_italic}>Alegria em cada casquinha!</span>
            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
