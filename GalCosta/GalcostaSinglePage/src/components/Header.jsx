import React from 'react';
import styles from "./Header.module.css"
import galcosta from '../assets/galcosta.jpg'
import logo from '../assets/Spotify.png'
import SearchBar from './SearchBar'
import fotoPerfil from '../assets/Group 6.png'
import { Link } from "react-router-dom";

function Header() {
    const handleSearch = (text) => {
    console.log("Pesquisando por:", text);
  };
  return (
    <header className={styles.general_config}>
      <Link to="/"><img className={styles.logospotfy} src={logo} alt="galcosta picture" /></Link>

      <SearchBar className= {styles.searchbar} onSearch={handleSearch} />
    
    
    <div className={styles.navbar} >
      
      <nav className={styles.general_config}>
        <Link to="/">Discografia</Link>
        <Link to="/hits">Maiores Sucessos</Link>
      </nav>
   
    </div>

      <img className={styles.logospotfy} src={fotoPerfil} alt="personal picture" />
    </header>
  );
}

export default Header;
