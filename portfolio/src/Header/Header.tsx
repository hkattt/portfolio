import styles from "./Header.module.css"

import ThemeButton from "./ThemeButton/ThemeButton.tsx";

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.bar}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><a href="#About">About</a></li>
                        <li className={styles.navItem}><a href="#Skills">Skills</a></li>
                        <li className={styles.navItem}><a href="#Projects">Projects</a></li>
                    </ul>
                </nav>
                <ThemeButton/>
            </div>
            <h1 className={styles.title}>Hugo Kat</h1>
            <p className={styles.introduction}>Computer Science student @ the ANU and Software Developer.</p>
        </header>
    )
}

export default Header