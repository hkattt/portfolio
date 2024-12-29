import styles from "./Content.module.css"

import About from "./About/About.tsx"
import Skills from "./Skills/Skills.tsx"
import Projects from './Projects/Projects.tsx'

function Content() {
    return(
        <main id="Content" className={styles.content}>
            <About/>
            <Skills/>
            <Projects/>
        </main>
    )
}

export default Content;