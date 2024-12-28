import styles from "./About.module.css"

import Title from "../Title/Title.tsx"

function About() {
    return(
        <section id="About" aria-label="About">
            <Title title="About"/>
            <p className={styles.about}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa! Laboriosam doloremque eligendi voluptatum perferendis! Maiores recusandae vel odio illum minima aut quam distinctio nisi voluptatibus quas. Fuga, eveniet et?
            </p>
        </section>
    )
}

export default About