import React from "react"
import Experience from "./Experience/Experience";

import styles from "./Experiences.module.scss";

import { ExperiencesProps } from "@/app/types/props";

const Projects = ({experiences}: ExperiencesProps) => {
  return (
    <section className={styles.experiences} id="My Experiences" aria-label="Experiences">
        <h2>Work Experience</h2>
        <div className={styles.list}>
            {
                experiences.map((project, index) => (
                    <Experience
                        key={index}
                        title={project.title}
                        date={project.date}
                        organisation={project.organisation}
                        description={project.description}
                        technologies={project.technologies}
                    ></Experience>
                ))
            }
        </div>
    </section>
  )
}

export default Projects