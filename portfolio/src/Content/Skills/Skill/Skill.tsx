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
            <div className={styles.container}>
                <img className={styles.img} src={image} alt={alt} title={title}/>
            </div>
            <p className={styles.skillText}>{text}</p>
        </div>
    )
}

export default Skill;