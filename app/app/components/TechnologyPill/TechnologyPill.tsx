import React from "react";

import styles from "./TechnologyPill.module.scss";

interface TechnologyPillProps {
    name: string;
}

const TechnologyPill = ({name}: TechnologyPillProps) => {
  return (
    <span className={styles.pill}>
        <p>{name}</p>
    </span>
  )
}

export default TechnologyPill