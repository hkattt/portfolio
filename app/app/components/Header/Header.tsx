import React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header} id="Header" aria-label="Header">
        <div>
            <ThemeButton width={50} height={50}></ThemeButton>
        </div>
    </header>
  )
}

export default Header