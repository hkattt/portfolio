import React from "react";
import Image from "next/image";

import styles from "./Skill.module.scss";

import { SkillProps } from "@/app/types/props";

const Skill = ({image, name}: SkillProps) => {
  return (
    <span className={styles.skill}>
        <span>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} style={{objectFit: "cover"}}/>
        </span>
        <p>{name}</p>
    </span>
  )
}

export default Skill