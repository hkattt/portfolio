import { ReactNode } from "react";

import styles from "./Experience.module.css"

interface Technology {
    src: string;
    alt: string;
    title: string;
}

interface ExperienceProp {
    jobTitle: string;
    date: string;
    organisation: string;
    organisationLink: string;
    description: ReactNode;
    technologies: Technology[];
}

function Experience({jobTitle, date, organisation, organisationLink, description, technologies}: ExperienceProp) {
    return(
        <div className={styles.experience}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.jobTitle}>{jobTitle}</h3>
                    <p className={styles.date}>{date}</p>
                </div>
                <a className={styles.link} href={organisationLink}>
                    <h4 className={styles.organisation}>{organisation}</h4>
                    <img src="redirect.svg" alt="Globe Icon"/>
                </a>
                <p className={styles.description}>{description}</p>
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

export default Experience