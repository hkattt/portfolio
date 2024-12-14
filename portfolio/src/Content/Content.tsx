import styles from "./Content.module.css"

import Projects from './Projects/Projects.tsx'
import Skills from "./Skills/Skills.tsx"

function Content() {
    return(
        <main id="content">
            <div className={styles.content}>
                <Skills/>
                <Projects/>
            </div>
      </main>
    )
}

export default Content;