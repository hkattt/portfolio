"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./ThemeButton.module.scss";

import { ThemeButtonProps } from '@/app/types/props';

const ThemeButton = ({width, height}: ThemeButtonProps) => {
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

  const themeImgSrc: string = isDark ? "/sun.svg" : "/moon.svg"; 
  const alt: string = isDark ? "Sun icon" : "Moon icon";

  return (
    <button className={styles.themeButton} onClick={switchTheme}>
      <Image src={themeImgSrc} alt={alt} width={width} height={height} style={{objectFit: "cover"}}/>
    </button>
  )  
}

export default ThemeButton