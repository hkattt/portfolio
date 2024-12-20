import styles from "./Footer.module.css"

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.text}>
                    ADD COPY RIGHT STUFF HERE | Designed in <a href="https://www.figma.com" target="_blank">Figma</a> and built using <a href="https://react.dev/" target="_blank">ReactJS</a>.
                </p>
                <div className={styles.socials}>
                    <a className={styles.social} href="https://github.com/hkattt" target="_blank">
                        <img className={styles.icon} src="github.svg" alt="GitHub Logo"/>
                    </a>
                    <a className={styles.social} href="https://www.linkedin.com/in/hugo-kat/" target="_blank">
                        <img className={styles.icon} src="linkedin.svg" alt="LinkedIn Logo"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer