import styles from "./Content.module.css"

import Hero from "./Hero/Hero.tsx"
import Skills from "./Skills/Skills.tsx"
import Projects from './Projects/Projects.tsx'

function Content() {
    return(
        <main id="Content" className={styles.content}>
            <Hero/>
            <Projects/>
            <Skills/>
        </main>
    )
}

export default Content;