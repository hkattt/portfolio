import React from "react";
import RedirectLink from "../../RedirectLink/RedirectLink";
import TechnologyPill from "../../TechnologyPill/TechnologyPill";

import styles from "./Experience.module.scss";

import { ExperienceProps } from "@/app/types/props";

const Experience = ({title, date, organisation, description, technologies}: ExperienceProps) => {
  return (
    <div className={styles.experience}>
        <div className={styles.header}>
            <h3>{title}</h3>
            <p className={styles.date}>{date}</p>
        </div>
        <RedirectLink title={organisation.title} href={organisation.href}></RedirectLink>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
            {
                technologies.map((technology, index) => (
                    <TechnologyPill key={index} name={technology}></TechnologyPill>
                ))
            }
        </div>
    </div>
  )
}

export default Experience