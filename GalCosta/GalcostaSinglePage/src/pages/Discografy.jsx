import React from "react";
import galAlbums from "../dados/dados";
import styles from "./Discografy.module.css"; // ✅ usando CSS Modules

export default function Discography() {
  return (
    <div className={styles.discographyPage}>
      <h1 className={styles.title}>Discografia de Gal Costa</h1>
      <div className={styles.albumGrid}>
        {galAlbums.map((album) => (
          <div key={album.id} className={styles.albumCard}>
            <img
              src={album.cover}
              alt={album.title}
              className={styles.albumCover}
            />
            <div className={styles.albumInfo}>
              <h3>{album.title}</h3>
              <p>{album.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
