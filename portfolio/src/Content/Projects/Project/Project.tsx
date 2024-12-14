import styles from "./Project.module.css"

interface Technology {
    src: string;
    alt: string;
}

interface ProjectProp {
    title: string;
    description: string;
    technologies: Technology[];
}

// TODO: Look at Simple Icons grid styling for ideas on this!!!

function Project({title, description, technologies}: ProjectProp) {
    return(
        <div className={styles.project}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <a className={styles.github} href="https://github.com" target="_blank">
                    <img src="github.svg" alt="GitHub Icon"/>
                </a>
            </div>
            <p className={styles.description}>{description}</p>
            <ul className={styles.technologies}>
                {
                    technologies.map((technology, index) => (
                        <li key={index}  className={styles.technology}>
                            <img 
                                src={technology.src} 
                                alt={technology.alt} 
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Project