import { useEffect, useState } from "react";

import styles from "./Header.module.css"

function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Retrieve the previous theme or default to light mode
        const savedTheme: string = localStorage.getItem("theme") || "light";
        setIsDark(savedTheme === "dark");
        document.documentElement.setAttribute("theme", savedTheme);
    }, [])

    const switchTheme = () => {
        setIsDark(!isDark);
        const newTheme: string = isDark ? "light" : "dark";
        document.documentElement.setAttribute("theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

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
                <button className={styles.themeButton} onClick={switchTheme}>
                    <img src="/moon.svg" alt="Theme Button" />
                </button>
            </div>
            <h1 className={styles.title}>Hugo Kat</h1>
            <p className={styles.introduction}>Computer Science student @ the ANU and Software Developer.</p>
        </header>
    )
}

export default Header