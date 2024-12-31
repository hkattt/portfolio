import { ReactNode } from "react";

import styles from "./Project.module.css"

interface Link {
    link: string;
    text: string;
}

interface Technology {
    src: string;
    alt: string;
    title: string;
}

interface ProjectProp {
    title: string;
    img: ReactNode
    links: Link[];
    description: ReactNode;
    technologies: Technology[];
}

function Project({title, img, links, description, technologies}: ProjectProp) {
    return(
        <div className={styles.project}>
            {
                img != null ? <div className={styles.imgContainer}>{img}</div> : <><></></>
            }
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.links}>
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <a className={styles.link} href={link.link} target="_blank" rel="noopener noreferrer">
                                        <p>{link.text}</p>
                                        <img src="redirect.svg" alt="Globe Icon"/>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                <ul className={styles.technologies}>
                    {
                        technologies.map((technology, index) => (
                            <li className={styles.technology} key={index}>
                                <img src={technology.src} alt={technology.alt} title={technology.title}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Project