import styles from "./Content.module.css"

import Hero from "./Hero/Hero.tsx"
import Skills from "./Skills/Skills.tsx"
import Projects from './Projects/Projects.tsx'
import Experiences from "./Experiences/Experiences.tsx"

function Content() {
    return(
        <main id="Content" className={styles.content}>
            <Hero/>
            <Projects/>
            <Skills/>
            <Experiences/>
        </main>
    )
}

export default Content;