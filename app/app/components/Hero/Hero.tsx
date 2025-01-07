import React from "react";
import Image from "next/image";
import IconButton from "../IconButton/IconButton";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}id="Hero" aria-label="Hero">
            <div>
                <h1>
                    Hey! I&apos;m <span>Hugo Kat </span>
                    <br />
                    Software Engineer
                </h1>
                <span>
                    <IconButton
                        link="mailto:hugo.kat3@gmail.com"
                        src="/email.svg"
                        alt="Email Icon"
                        width={35}
                        height={35}
                    >
                    </IconButton>
                    <IconButton
                        link="https://github.com/hkattt"
                        src="/github.svg"
                        alt="GitHub Icon"
                        width={30}
                        height={30}
                    >
                    </IconButton>
                    <IconButton
                        link="https://www.linkedin.com/in/hugo-kat/"
                        src="/linkedin.svg"
                        alt="LinkedIn Icon"
                        width={30}
                        height={30}
                    >
                    </IconButton>
                </span>
            </div>
            <Image className={styles.picture} src="/hugo.png" alt="Hugo Profile Picture" width={0} height={0} sizes="100vw" style={{width: "100%", height: "auto"}}/>
    </section>
  )
}

export default Hero