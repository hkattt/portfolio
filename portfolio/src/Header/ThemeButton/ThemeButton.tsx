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
        const newTheme: string = isDark ? "light" : "dark";
        document.documentElement.setAttribute("theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setIsDark(!isDark);
    };

    const themeImgSrc: string = isDark ? "/sun.svg" : "/moon.svg";
    const title: string = isDark ? "Sun icon from Icons8" : "Moon icon from Icon Icons by Vaadin under CC Attribution"

    return(
        <button className={styles.themeButton} onClick={switchTheme}>
            <img src={themeImgSrc} alt="Theme Button" title={title}/>
        </button>
    )
}

export default ThemeButton