import React from 'react';
import styles from "./Header.module.css"
import galcosta from '../assets/galcosta.jpg'
import logo from '../assets/Spotify.png'
import SearchBar from './SearchBar'
import fotoPerfil from '../assets/Group 6.png'

function Header() {
    const handleSearch = (text) => {
    console.log("Pesquisando por:", text);
  };
  return (
    <header className={styles.general_config}>
      <img className={styles.logospotfy} src={logo} alt="galcosta picture" />

      <SearchBar className= {styles.searchbar} onSearch={handleSearch} />
      <div className={styles.navbar} >
        <ul className={styles.general_config}>
            <li>discografia</li>
            <li>Top 5</li>
        </ul>
      </div>

      <img className={styles.logospotfy} src={fotoPerfil} alt="personal picture" />
    </header>
  );
}

export default Header;
