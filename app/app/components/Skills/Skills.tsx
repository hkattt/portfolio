import React from "react";
import Skill from "./Skill/Skill";

import styles from "./Skills.module.scss";

import { SkillsProps } from "@/app/types/props";

const Skills = ({skills}: SkillsProps) => {
  return (
    <div className={styles.skills} id="skills">
        <h2>My Skills</h2>
        <div>
            {
                skills.map((skill, index) => (
                    <Skill key={index} image={skill.image} name={skill.name}/>
                ))
            }
        </div>
    </div>
  )
}

export default Skills