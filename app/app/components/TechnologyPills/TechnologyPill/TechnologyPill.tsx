import React from "react";

import styles from "./TechnologyPill.module.scss";

import { TechnologyPillProps } from "@/app/types/props";

const TechnologyPill = ({name}: TechnologyPillProps) => {
  return (
    <span className={styles.pill}>
        <p>{name}</p>
    </span>
  )
}

export default TechnologyPill