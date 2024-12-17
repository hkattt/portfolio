import { useEffect, useState } from "react";

import styles from "./ThemeButton.module.css"

function ThemeButton() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Retrieve the previous theme or default to dark` mode
        const savedTheme: string = localStorage.getItem("theme") || "dark";
        setIsDark(savedTheme === "dark");
        document.documentElement.setAttribute("theme", savedTheme);
    }, []);

    const switchTheme = () => {
        setIsDark(!isDark);
        const newTheme: string = isDark ? "light" : "dark";
        document.documentElement.setAttribute("theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const themeImgSrc: string = isDark ? "/sun.svg" : "/moon.svg";

    return(
        <button className={styles.themeButton} onClick={switchTheme}>
            <img src={themeImgSrc} alt="Theme Button"/>
        </button>
    )
}

export default ThemeButton