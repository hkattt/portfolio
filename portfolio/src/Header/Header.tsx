import styles from "./Header.module.css"

import ThemeButton from "./ThemeButton/ThemeButton.tsx";

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.bar}>
                    <div className={styles.socials}>
                        <a className={styles.social} href="mailto:hugo.kat3@gmail.com">
                            <img className={styles.icon} src="email.svg" alt="Email Icon"/>
                        </a>
                        <a className={styles.social} href="https://github.com/hkattt" target="_blank" rel="noopener noreferrer">
                            <img className={styles.icon} src="github.svg" alt="GitHub Logo"/>
                        </a>
                        <a className={styles.social} href="https://www.linkedin.com/in/hugo-kat/" target="_blank" rel="noopener noreferrer">
                            <img className={styles.icon} src="linkedin.svg" alt="LinkedIn Logo"/>
                        </a>
                    </div>
                    <span className={styles.themeButtonContainer}>
                     <ThemeButton/>
                    </span>
                </div>
                <h1 className={styles.title}>Hugo Kat</h1>
                <p className={styles.introduction}>Junior software developer and computer science student @ the ANU</p>
            </div>
        </header>
    )
}

export default Header