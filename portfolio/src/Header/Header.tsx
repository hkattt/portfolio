import styles from "./Header.module.css"

function Header() {
    return(
        <div className={styles.header}>
            <h1 className={styles.title}>Hugo Kat</h1>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}><a href="/about">About</a></li>
                    <li className={styles.nav_item}><a href="/skills">Skills</a></li>
                    <li className={styles.nav_item}><a href="/projects">Projects</a></li>
                    <li className={styles.nav_item}><a href="/contacts">Contacts</a></li>
                </ul>
            </nav>
            <button className={styles.mode_button}>
                <img src="/moon.svg" alt="Dark Mode Button" />
            </button>
        </div>
    )
}

export default Header