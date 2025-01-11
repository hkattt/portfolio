import React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header} id="Header" aria-label="Header">
        <div className={styles.content}>
            <ThemeButton></ThemeButton>
        </div>
    </header>
  )
}

export default Header