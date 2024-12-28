import styles from "./Title.module.css"

interface TitleProp {
    title: string
}

function Title({ title } : TitleProp) {
    return(
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>{title}</h2>
            <hr className={styles.line}/>
        </div>
    )
}

export default Title