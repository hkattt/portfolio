import styles from "./Skills.module.css"

import Skill from "./Skill/Skill.tsx"

const skills = [
    {image: "c.svg",           alt: "C Logo",            text: "C"},
    {image: "cplusplus.svg",   alt: "C++ Logo",          text: "C++"},
    {image: "css3.svg",        alt: "CSS3 Logo",         text: "CSS"},
    // {image: "dotnet.svg",      alt: ".NET Logo",         text: ".NET"},
    {image: "git.svg",         alt: "Git Logo",          text: "Git"},
    {image: "godotengine.svg", alt: "Godot Engine Logo", text: "Godot Engine"},
    {image: "gnubash.svg",     alt: "GNU Bash Logo",     text: "Bash"},
    {image: "html5.svg",       alt: "HTML5 Logo",        text: "HTML"},
    {image: "linux.svg",       alt: "Linux Logo",        text: "Linux"},
    // {image: "opengl.svg",      alt: "OpenGL Logo",       text: "OpenGL"},
    {image: "openjdk.svg",     alt: "OpenJDK Logo",      text: "OpenJDK"},
    {image: "python.svg",      alt: "Python Logo",       text: "Python"},
    {image: "react.svg",       alt: "ReactJS Logo",      text: "ReactJS"},
    {image: "rust.svg",        alt: "Rust Logo",         text: "Rust"}
];

function Skills() {
    return(
        <section id="Skills" aria-label="My Skills">
            <h2 className={styles.title}>Skills</h2>
            <hr className={styles.line}/>
            <div className={styles.skills}>
                {
                    skills.map((skill, index) => (
                        <Skill 
                            key={index} 
                            image={skill.image} 
                            alt={skill.alt} 
                            text={skill.text}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Skills