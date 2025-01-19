import React from "react";
import Image from "next/image";

import styles from "./Skill.module.scss";

import { SkillProps } from "@/app/types/props";

const Skill = ({image, name}: SkillProps) => {
  return (
    <span className={styles.skill}>
        <span>
            <Image 
              src={image.src} 
              alt={image.alt} 
              aria-hidden="true"
              width={image.width} height={image.height} 
              style={
                {
                  width: "clamp(40px, 5vw, 55px)", 
                  height: "clamp(40px, 5vw, 55px)", 
                  objectFit: "cover"
                }
              }
            />
        </span>
        <p>{name}</p>
    </span>
  )
}

export default Skill