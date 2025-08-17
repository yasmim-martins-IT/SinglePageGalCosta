import React from "react";
import styles from "./ArtistSection.module.css";
import galcosta from "../assets/galcosta.jpg"; 

export default function ArtistSection() {
  return (
    <section className={styles.artistSection}>
      <h2 className={styles.title}>QUEM É A ARTISTA</h2>
      <div className={styles.content}>
        <img
          src={galcosta}
          alt="Gal Costa"
          className={styles.artistImage}
        />
        <div className={styles.textBox}>
          <p>
            Gal Costa é uma das cantoras mais icônicas da música brasileira, reconhecida por sua voz marcante e versatilidade. Nascida Maria da Graça Costa Penna Burgos, em 26 de setembro de 1945, em Salvador, Bahia, ela começou sua carreira nos anos 1960, durante o movimento da Tropicalia, que misturava elementos da música popular brasileira com influências internacionais.
            
          </p>
          <p>
            Ao longo de sua carreira, Gal se destacou por sua capacidade de interpretar diversos estilos musicais, do samba e bossa nova ao rock e MPB experimental. Entre seus grandes sucessos estão músicas como “Baby”, “Chuva de Prata” e “Aquarela do Brasil”. Além da técnica vocal impecável, ela é conhecida por sua presença de palco marcante e por transformar cada apresentação em uma experiência única.
          </p>
          <p>
            Gal Costa também é admirada por sua coragem artística e sua contribuição à cultura brasileira, sendo referência para várias gerações de músicos e fãs. Sua trajetória consolidou-se como símbolo da criatividade e da diversidade da música do Brasil.
          </p>
        </div>
      </div>
    </section>
  );
}
