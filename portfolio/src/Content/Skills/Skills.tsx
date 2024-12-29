import styles from "./Skills.module.css"

import Skill from "./Skill/Skill.tsx"
import Title from "../Title/Title.tsx"

const skills = [
    {image: "c.svg",           alt: "C Logo",            text: "C",            title: "C icon from Simple Icons"},
    {image: "cplusplus.svg",   alt: "C++ Logo",          text: "C++",          title: "C++ icon from Simple Icons"},
    {image: "css3.svg",        alt: "CSS3 Logo",         text: "CSS",          title: "CSS3 icon from Simple Icons"},
    {image: "git.svg",         alt: "Git Logo",          text: "Git",          title: "Git icon from Simple Icons under CC-BY-3.0 licnese"},
    {image: "godotengine.svg", alt: "Godot Engine Logo", text: "Godot Engine", title: "Godot Engine icon from Simple Icons under CC-BY-4.0 license"},
    {image: "gnubash.svg",     alt: "GNU Bash Logo",     text: "Bash",         title: "GNU Bash icon from Simple Icons under MIT license"},
    {image: "html5.svg",       alt: "HTML5 Logo",        text: "HTML",         title: "HTML icon from Simple Icons"},
    {image: "linux.svg",       alt: "Linux Logo",        text: "Linux",        title: "Linux icon from Simple Icons"},
    {image: "java.svg",        alt: "Java Logo",         text: "Java",         title: "Java icon from Icons8"},
    {image: "python.svg",      alt: "Python Logo",       text: "Python",       title: "Python icon from Simple Icons"},
    {image: "react.svg",       alt: "React Logo",        text: "React",        title: "React icon from Simple Icons"},
    {image: "rust.svg",        alt: "Rust Logo",         text: "Rust",         title: "Rust icon from Simple Icons under CC-BY-SA-4.0"}
];

function Skills() {
    return(
        <section id="Skills" aria-label="My Skills">
            <Title title="Skills"/>
            <div className={styles.skills}>
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
        </section>
    );
}

export default Skills