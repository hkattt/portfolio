import { ReactNode } from "react";

import styles from "./Experience.module.css"


interface ExperienceProp {
    jobTitle: string;
    date: string;
    organisation: string;
    organisationLink: string;
    description: ReactNode;
}

function Experience({jobTitle, date, organisation, organisationLink, description}: ExperienceProp) {
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
            </div>
        </div>
    )
}

export default Experience