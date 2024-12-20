import styles from "./Project.module.css"

interface Link {
    link: string;
    src: string;
    alt: string;
}

interface Technology {
    src: string;
    alt: string;
}

interface ProjectProp {
    title: string;
    links: Link[];
    description: string;
    technologies: Technology[];
}

function Project({title, links, description, technologies}: ProjectProp) {
    return(
        <div className={styles.project}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.links}>
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <a className={styles.link} href={link.link} target="_blank">
                                    <img src={link.src} alt={link.alt}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <p className={styles.description}>{description}</p>
            <ul className={styles.technologies}>
                {
                    technologies.map((technology, index) => (
                        <li className={styles.technology} key={index}>
                            <img src={technology.src} alt={technology.alt}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Project