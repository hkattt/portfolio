import styles from "./Header.module.css"

import ThemeButton from "./ThemeButton/ThemeButton.tsx";

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.bar}>
                <span className={styles.themeButtonContainer}>
                    <ThemeButton/>
                </span>
            </div>
        </header>
    )
}

export default Header