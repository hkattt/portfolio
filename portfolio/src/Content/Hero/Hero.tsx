import styles from "./Hero.module.css"


function Hero() {
    return(
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hugo Kat</h1>
                <p className={styles.introduction}>Junior software engineer and computer science student @ the ANU</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3B4252" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,186.7C840,203,960,181,1080,160C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    )
}

export default Hero