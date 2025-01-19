"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./ThemeButton.module.scss";

const ThemeButton = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Retrieve the previous theme or default to light mode
    const savedTheme: string = localStorage.getItem("theme") || "light";
    setIsDark(savedTheme === "dark");
    document.documentElement.setAttribute("theme", savedTheme);
    }, []);

  const switchTheme = () => {
    const newTheme: string = isDark ? "light" : "dark";     
    document.documentElement.setAttribute("theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(() => !isDark);
  };

  return (
    <div className={styles.themeButton} onClick={switchTheme}>
      <span className={isDark ? styles.selected : styles.notSelected}>
        <Image 
          src="sun.svg" 
          alt="Sun Icon" 
          width={25} height={25} 
          style={{
            objectFit: "cover"
          }}
        />
      </span>
      <span className={!isDark ? styles.selected : styles.notSelected}>
        <Image 
          src={"moon.svg"} 
          alt="Moon Icon" 
          width={25} height={25} 
          style={{
            objectFit: "cover"
          }}
        />
      </span>
    </div>
  )  
}

export default ThemeButton