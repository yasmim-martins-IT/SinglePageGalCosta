import React from 'react';
import styles from "./Header.module.css"
import galcosta from '../assets/galcosta.jpg'
import logo from '../assets/Spotify.png'

function Header() {
  return (
    <header className={styles.general_config}>
      <img className={styles.logospotfy} src={logo} alt="imagem da galcosta" />

      <div >
        <ul className={styles.general_config}>
            <li>principais sucessos</li>
            <li>historia da cantora</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
