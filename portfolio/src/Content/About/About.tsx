import styles from "./About.module.css"

function About() {
    return(
        <section id="About" aria-label="About">
            <h2 className={styles.title}>About</h2>
            <hr className={styles.line}/>
            <p className={styles.about}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa! Laboriosam doloremque eligendi voluptatum perferendis! Maiores recusandae vel odio illum minima aut quam distinctio nisi voluptatibus quas. Fuga, eveniet et?
            </p>
        </section>
    )
}

export default About