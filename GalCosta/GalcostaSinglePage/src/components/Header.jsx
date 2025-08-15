import React from 'react';
import styles from "./Header.module.css"
import galcosta from '../assets/galcosta.jpg'

function Header() {
  return (
    <header className={styles.general_config}>
      <img src={galcosta} alt="imagem da galcosta" />
    </header>
  );
}

export default Header;
