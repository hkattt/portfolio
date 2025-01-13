import React from "react";
import Link from "next/link";
import ThemeButton from "../ThemeButton/ThemeButton";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header} id="header" aria-label="Header">
        <div className={styles.content}>
            <nav>
              <Link href="#hero" rel="noopener noreferrer">Home</Link>
              <Link href="#projects" rel="noopener noreferrer">Projects</Link>
              <Link href="#skills" rel="noopener noreferrer">Skills</Link>
              <Link href="#experiences" rel="noopener noreferrer">Experience</Link>
            </nav>
            <ThemeButton/>
        </div>
    </header>
  )
}

export default Header