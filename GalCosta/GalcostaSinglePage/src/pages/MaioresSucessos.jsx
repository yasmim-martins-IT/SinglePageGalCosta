import Azul from '../assets/CapaAlbumAzul.jpg'
import eternamente from '../assets/eternamente.jpeg'
import baby from '../assets/baby.jpg'
import chuvadeprata from '../assets/chuvadeprata.jpg'
import React from "react";
import MusicCardsGrid from "../components/MusicCards"; // importa o grid
import styles from './MaioresSucessos.module.css'
import festa from '../assets/festa.jpg'
import coracaovagabundo from '../assets/coracao.jpeg'
import meunomeegal from '../assets/meunomeegal.jpg'
import aquarela from '../assets/aquarela.jpeg'
import modinha from '../assets/modinha.jpg'
import barato from '../assets/barato.avif'


export default function Hits() {
      const items = [
          { id: 1, title: "Baby", subtitle: "Gal Costa", cover: baby },
  { id: 2, title: "Festa do Interior", subtitle: "Gal Costa", cover: festa},
  { id: 3, title: "Meu Nome é Gal", subtitle: "Gal Costa", cover: meunomeegal },
  { id: 4, title: "Coração Vagabundo", subtitle: "Gal Costa", cover: coracaovagabundo },
  { id: 5, title: "Modinha para Gabriela", subtitle: "Gal Costa", cover: modinha },
  { id: 6, title: "Chuva de Prata", subtitle: "Gal Costa", cover: chuvadeprata },
  { id: 7, title: "Aquarela do Brasil", subtitle: "Gal Costa", cover: aquarela},
  { id: 8, title: "Barato Total", subtitle: "Gal Costa", cover: barato },
  { id: 9, title: "Baby Gal (Ao Vivo)", subtitle: "Gal Costa", cover: baby},

  { id: 10, title: "Festa do Interior (Ao Vivo)", subtitle: "Gal Costa", cover: festa }
      ];
      
    const handlePlay = (track) => {
    console.log("▶ Tocando:", track.title);
  };
      return (
        <main>
            <h1>Maiores Hits da cantora</h1>

            <section className={styles.general_config}>
                     <MusicCardsGrid items={items} onPlay={handlePlay}  />
            </section>

        </main>
      )


}