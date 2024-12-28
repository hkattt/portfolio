import styles from "./Footer.module.css"

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.text}>
                    ADD COPY RIGHT STUFF HERE | Designed in <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a> and built using <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">ReactJS</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer