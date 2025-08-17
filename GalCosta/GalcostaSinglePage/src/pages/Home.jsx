import React from "react";
import MusicCardsGrid from "../components/MusicCards"; // importa o grid
import styles from './Home.module.css'
import galCosta from '../assets/galcosta.jpg'
import ArtistSection  from "../components/Artist";
import Azul from '../assets/CapaAlbumAzul.jpg'
import eternamente from '../assets/eternamente.jpeg'
import baby from '../assets/baby.jpg'
import chuvadeprata from '../assets/chuvadeprata.jpg'

export default function Home() {
  // lista de músicas (mock, sem backend)
  const items = [
    { id: 1, title: "Azul", subtitle: "Gal Costa", cover: Azul },
    { id: 2, title: "Eternamente", subtitle: "Gal Costa", cover: eternamente },
    { id: 3, title: "Baby", subtitle: "Gal Costa", cover: baby },
    { id: 4, title: "Chuva de Prata", subtitle: "Gal Costa", cover: chuvadeprata },
  ];

  
  const handlePlay = (track) => {
    console.log("▶ Tocando:", track.title);
  };

  return (
    <main >
      <section className={styles.general_config}>
      <div className={styles.cards}>
      <MusicCardsGrid items={items} onPlay={handlePlay}  />
      </div>
      </section>
      
      <section>
          <ArtistSection/>
      </section>
       
    
    </main>
  );
}
