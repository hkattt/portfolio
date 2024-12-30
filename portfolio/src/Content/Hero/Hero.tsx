import styles from "./Hero.module.css"


function Hero() {
    return(
        <section id="Hero" aria-label="Hero" className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hey! I'm Hugo Kat <br/>Software Engineer</h1>
                <span className={styles.border}>
                    <img className={styles.picture} src="hugo.png" alt="Profile Picture"/>
                </span>
            </div>
        </section>
    )
}

export default Hero