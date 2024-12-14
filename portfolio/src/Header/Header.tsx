import styles from "./Header.module.css"

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.bar}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><a href="/about">About</a></li>
                        <li className={styles.navItem}><a href="/skills">Skills</a></li>
                        <li className={styles.navItem}><a href="/projects">Projects</a></li>
                    </ul>
                </nav>
                <button className={styles.themeButton}>
                    <img src="/moon.svg" alt="Theme Button" />
                </button>
            </div>
            <h1 className={styles.title}>Hugo Kat</h1>
            <p className={styles.introduction}>Computer Science student @ the ANU and Software Developer.</p>
        </header>
    )
}

export default Header