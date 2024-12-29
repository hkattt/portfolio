import styles from "./About.module.css"

import Title from "../Title/Title.tsx"

function About() {
    return(
        <section id="About" aria-label="About">
            <Title title="ABOUT"/>
            <p className={styles.about}>
                I am currently studying a Bachelor of Advanced Computing (Honours) at the <a href="https://www.anu.edu.au/" target="_blank" rel="noopener noreferrer">Australian National University</a>. 
                <br/>
                I also enjoy playing football, videogames, and watching movies. 
            </p>
        </section>
    )
}

export default About