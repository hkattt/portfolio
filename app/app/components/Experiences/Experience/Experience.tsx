import React from "react";
import RedirectLink from "../../RedirectLink/RedirectLink";
import TechnologyPills from "../../TechnologyPills/TechnologyPills";

import styles from "./Experience.module.scss";

import { ExperienceProps } from "@/app/types/props";

const Experience = ({title, date, organisation, description, technologies}: ExperienceProps) => {
  return (
    <div className={styles.experience}>
        <div className={styles.header}>
          <span className={styles.titleSection}>
              <h3>{title}</h3>
              <RedirectLink title={organisation.title} href={organisation.href}/>
          </span>
          <p className={styles.date}>{date}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <TechnologyPills technologies={technologies}/>
    </div>
  )
}

export default Experience