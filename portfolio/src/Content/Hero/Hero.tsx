import styles from "./Hero.module.css"


function Hero() {
    return(
        <section id="Hero" aria-label="Hero" className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hugo Kat</h1>
                <p className={styles.introduction}>Junior software engineer and computer science student @ the ANU</p>
            </div>
        </section>
    )
}

export default Hero