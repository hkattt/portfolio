import styles from "./Skill.module.css"

interface SkillProps {
    image: string;
    alt: string;
    text: string;
}

function Skill({image, alt, text}: SkillProps) {
    return(
        <div className={styles.skill}>
            <img className={styles.skillImg} src={image} alt={alt} />
            <p className={styles.skillText}>{text}</p>
        </div>
    )
}

export default Skill;