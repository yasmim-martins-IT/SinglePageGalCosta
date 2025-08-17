import React from "react";
import styles from "./MusicCards.module.css";

export default function MusicCardsGrid({ items = [], onPlay }) {
  return (
    <div className={styles.musicGrid}>
      {items.map((track) => (
        <MusicCard key={track.id} track={track} onPlay={onPlay} />
      ))}
    </div>
  );
}

export function MusicCard({ track, onPlay }) {
  if (!track) {
    return <div className={styles.musicCard}>Nenhuma música</div>;
  }

  return (
    <div className={styles.musicCard}>
      <div className={styles.coverWrapper}>
        <img src={track.cover} alt={`${track.title} cover art`} className={styles.cover} />
        <button
          className={styles.playBtn}
          onClick={(e) => {
            e.stopPropagation();
            onPlay?.(track);
          }}
        >
          ▶
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{track.title}</div>
        <div className={styles.subtitle}>{track.subtitle}</div>
      </div>
    </div>
  );
}
