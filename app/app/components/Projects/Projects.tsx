import React from "react"
import Project from "./Project/Project";

import styles from "./Projects.module.scss";

import { ProjectsProps } from "@/app/types/props";

const Projects = ({projects}: ProjectsProps) => {
  return (
    <section className={styles.projects} id="projects" aria-label="Projects">
        <h2>My Projects</h2>
        <div className={styles.list}>
            {
                projects.map((project, index) => (
                    <Project
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        links={project.links}
                        technologies={project.technologies}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default Projects