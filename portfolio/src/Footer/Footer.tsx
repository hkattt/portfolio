import styles from "./Footer.module.css"

function Footer() {
    return(
        <footer className={styles.footer}>
            <span className={styles.content}>
                <p className={styles.text}>
                    Designed in <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a>, 
                    built using <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">ReactJS</a>, 
                    with the <a href="https://www.nordtheme.com/docs/colors-and-palettes" target="_blank" rel="noopener noreferrer">Nord theme</a>.
                </p>
                <p className={styles.copyright}>
                    © 2025 Hugo Kat. All rights reserved.
                </p>
            </span>
        </footer>
    )
}

export default Footer