import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from '../assets/Spotify.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Logo ou nome */}
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      {/* Links */}
      <div className={styles.links}>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
        <a href="#suporte">Suporte</a>
      </div>

      {/* Redes sociais */}
      <div className={styles.socials}>
        <FaInstagram className={styles.icon} />
        <FaFacebook className={styles.icon} />
        <FaTwitter className={styles.icon} />
      </div>
    </footer>
  );
}
