import styles from "./Skill.module.css"

interface SkillProp {
    image: string;
    alt: string;
    text: string;
    title: string;
}

function Skill({image, alt, text, title}: SkillProp) {
    return(
        <div className={styles.skill}>
            <img className={styles.skillImg} src={image} alt={alt} title={title}/>
            <p className={styles.skillText}>{text}</p>
        </div>
    )
}

export default Skill;