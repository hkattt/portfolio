import { useEffect, useState } from "react";

import styles from "./ThemeButton.module.css"

function ThemeButton() {
    const [isLight, setIsLight] = useState(true);

    useEffect(() => {
        // Retrieve the previous theme or default to dark` mode
        const savedTheme: string = localStorage.getItem("theme") || "light";
        setIsLight(savedTheme === "light");
        document.documentElement.setAttribute("theme", savedTheme);
    }, []);

    const switchTheme = () => {
        const newTheme: string = isLight ? "dark" : "light";
        document.documentElement.setAttribute("theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setIsLight(!isLight);
    };

    const themeImgSrc: string = isLight ? "/moon.svg" : "/sun.svg";
    const title: string = isLight ? "Moon icon from Icon Icons by Vaadin under CC Attribution" : "Sun icon from Icons8";

    return(
        <button className={styles.themeButton} onClick={switchTheme}>
            <img src={themeImgSrc} alt="Theme Button" title={title}/>
        </button>
    )
}

export default ThemeButton