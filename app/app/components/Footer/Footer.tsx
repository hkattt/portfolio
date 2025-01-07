import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer} id="Footer" aria-label="Footer">
        <div>
            <p className={styles.message}>Designed with 💙 by Hugo Kat</p>
            <p className={styles.copyright}>© 2025 Hugo Kat. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer