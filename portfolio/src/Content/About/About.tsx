import styles from "./About.module.css"

function About() {
    return(
        <section id="About" aria-label="About" className={styles.about}>
            <div className={styles.content}>
                <p className={styles.aboutText}>
                    I'm an aspiring software engineer with a passion for learning new technologies and skills. I love unpacking complex computer systems to understand their inner workings. Currently, 
                    I am working as a Junior Software Engineer at <a href="https://www.govteams.gov.au/" target="_blank" rel="noopener noreferrer">GovTEAMS</a>, contributing to front-end and 
                    back-end development. 

                    <br/>

                    I'm completing a Bachelor of Advanced Computing (Honours) at the <a href="https://www.anu.edu.au/" target="_blank" rel="noopener noreferrer"> Australian National University </a> 
                    majoring in <a href="https://programsandcourses.anu.edu.au/major/CSEC-MAJ" target="_blank" rel="noopener noreferrer"> Cyber Security </a> and specialising in 
                    <a href="https://programsandcourses.anu.edu.au/specialisation/SYAR-SPEC" target="_blank" rel="noopener noreferrer"> Systems and Architecture </a>. I am especially interested in 
                    operating systems, software security, embedded systems, networking, and computer graphics. 

                    <br/>

                    Beyond work and study, I enjoy relaxing by playing football, video-games, and watching movies. I'm also passionate about game development since it allows me to use my programming
                    and graphics skills in a creative way. 
                </p>
            </div>
        </section>
    )
}

export default About