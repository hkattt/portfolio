import styles from "./Hero.module.css"


function Hero() {
    return(
        <section id="Hero" aria-label="Hero" className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.information}>
                    <h1 className={styles.title}>Hey! I'm Hugo Kat <br/>Software Engineer</h1>
                    <div className={styles.socials}>
                        <a className={styles.social} href="mailto:hugo.kat3@gmail.com">
                            <img className={styles.icon} src="email.svg" alt="Email Icon" title="Email icon from Simple Icons"/>
                        </a>
                        <a className={styles.social} href="https://github.com/hkattt" target="_blank" rel="noopener noreferrer">
                            <img className={styles.icon} src="github.svg" alt="GitHub Logo" title="GitHub icon from Simple Icons"/>
                        </a>
                        <a className={styles.social} href="https://www.linkedin.com/in/hugo-kat/" target="_blank" rel="noopener noreferrer">
                            <img className={styles.icon} src="linkedin.svg" alt="LinkedIn Logo" title="LinkedIn icon from Icons8"/>
                        </a>
                    </div>
                </div>
                <span className={styles.border}>
                    <img className={styles.picture} src="hugo.png" alt="Profile Picture"/>
                </span>
            </div>
        </section>
    )
}

export default Hero