import React from "react"
import TechnologyPill from "./TechnologyPill/TechnologyPill";

import styles from "./TechnologyPills.module.scss"

import { TechnologyPillsProps } from "@/app/types/props";

const TechnologyPills = ({technologies}: TechnologyPillsProps) => {
  return (
    <div className={styles.technologies}>
        {
            technologies.map((technology, index) => (
                <TechnologyPill key={index} name={technology.name}></TechnologyPill>
            ))
        }
    </div>
  )
}

export default TechnologyPills