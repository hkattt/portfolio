import styles from "./Header.module.css"

function Header() {
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>Hugo Kat</h1>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/about">About</a></li>
                    <li className={styles.navItem}><a href="/skills">Skills</a></li>
                    <li className={styles.navItem}><a href="/projects">Projects</a></li>
                    <li className={styles.navItem}><a href="/contacts">Contacts</a></li>
                </ul>
            </nav>
            <button className={styles.modeButton}>
                <img src="/moon.svg" alt="Dark Mode Button" />
            </button>
        </header>
    )
}

export default Header