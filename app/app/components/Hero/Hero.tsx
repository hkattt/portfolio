import React from "react"
import IconButton from "../IconButton/IconButton";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
        <div>
            <h1>
                Hey! I'm <span>Hugo Kat </span>
                <br />
                Software Engineer
            </h1>
            <span>
                <IconButton
                    link="mailto:hugo.kat3@gmail.com"
                    src="email.svg"
                    alt="Email Icon"
                >
                </IconButton>
                <IconButton
                    link="https://github.com/hkattt"
                    src="github.svg"
                    alt="GitHub Icon"
                >
                </IconButton>
                <IconButton
                    link="https://www.linkedin.com/in/hugo-kat/"
                    src="linkedin.svg"
                    alt="LinkedIn Icon"
                >
                </IconButton>
            </span>
        </div>
        <img className={styles.picture} src="hugo.png" alt="Hugo Profile Picture"/>
    </div>
  )
}

export default Hero