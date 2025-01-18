"use client"
import React from "react";
import Link from "next/link";

import ThemeButton from "../ThemeButton/ThemeButton";

import styles from "./Header.module.scss";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({behavior: "smooth", block: "end"})
  };

  return (
    <header className={styles.header} id="header" aria-label="Header">
        <div className={styles.content}>
            <span className={styles.bar}>
              <nav>
                <Link href="/" rel="noopener noreferrer">Home</Link>
                <Link href="/#projects" rel="noopener noreferrer">Projects</Link>
                <Link href="/#skills" rel="noopener noreferrer">Skills</Link>
                <Link href="/#experiences" rel="noopener noreferrer">Experience</Link>
              </nav>
            </span>
            <ThemeButton/>
        </div>
    </header>
  )
}

export default Header