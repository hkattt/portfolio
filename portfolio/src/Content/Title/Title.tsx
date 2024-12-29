import styles from "./Title.module.css"

interface TitleProp {
    title: string
}

function Title({ title } : TitleProp) {
    return(
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}

export default Title