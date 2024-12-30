import styles from "./Skills.module.css"

import Skill from "./Skill/Skill.tsx"
import Title from "../Title/Title.tsx"

const skills = [
    {image: "react.svg",       alt: "React Logo",        text: "React",        title: "React icon from Simple Icons"},
    {image: "html5.svg",       alt: "HTML5 Logo",        text: "HTML",         title: "HTML icon from Simple Icons"},
    {image: "css3.svg",        alt: "CSS3 Logo",         text: "CSS",          title: "CSS3 icon from Simple Icons"},
    {image: "c.svg",           alt: "C Logo",            text: "C",            title: "C icon from Simple Icons"},
    {image: "cplusplus.svg",   alt: "C++ Logo",          text: "C++",          title: "C++ icon from Simple Icons"},
    {image: "java.svg",        alt: "Java Logo",         text: "Java",         title: "Java icon from Icons8"},
    {image: "python.svg",      alt: "Python Logo",       text: "Python",       title: "Python icon from Simple Icons"},
    {image: "rust.svg",        alt: "Rust Logo",         text: "Rust",         title: "Rust icon from Simple Icons under CC-BY-SA-4.0"},
    {image: "git.svg",         alt: "Git Logo",          text: "Git",          title: "Git icon from Simple Icons under CC-BY-3.0 license"},
    {image: "linux.svg",       alt: "Linux Logo",        text: "Linux",        title: "Linux icon from Simple Icons"},
    {image: "gnubash.svg",     alt: "GNU Bash Logo",     text: "Bash",         title: "GNU Bash icon from Simple Icons under MIT license"},
    {image: "godotengine.svg", alt: "Godot Engine Logo", text: "Godot Engine", title: "Godot Engine icon from Simple Icons under CC-BY-4.0 license"}    
];

function Skills() {
    return(
        <section id="Skills" aria-label="My Skills" className={styles.skills}>
            <div className={styles.content}>
                <Title title="Skills"/>
                <p className={styles.text}>Some of the skills and technologies that I am familiar with.</p>
                <div className={styles.skillsGrid}>
                    {
                        skills.map((skill, index) => (
                            <Skill 
                                key={index} 
                                image={skill.image} 
                                alt={skill.alt} 
                                text={skill.text}
                                title={skill.title}
                            />
                        ))
                    }
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4C566A" fill-opacity="1" d="M0,96L60,128C120,160,240,224,360,213.3C480,203,600,117,720,96C840,75,960,117,1080,122.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </section>
    );
}

export default Skills