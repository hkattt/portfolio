import styles from "./Skill.module.css"

interface SkillProps {
    image: string;
    alt: string;
    text: string;
}

function Skill({image, alt, text}: SkillProps) {
    return(
        <div className={styles.skill}>
            <img className={styles.skill_img} src={image} alt={alt} />
            <p className={styles.skill_text}>{text}</p>
        </div>
    )
}

export default Skill;