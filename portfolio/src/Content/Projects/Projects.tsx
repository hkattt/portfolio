import styles from "./Projects.module.css"

import Project from "./Project/Project.tsx"

const projects = [
    {
        title: "First Project", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dignissimos obcaecati magni iusto mollitia aperiam a id ipsa tempora ad eum numquam assumenda expedita consectetur consequuntur voluptatem facere, perspiciatis accusamus.",
        technologies: [
            {
                src: "c.svg",
                alt: "C Logo"
            },
            {
                src: "linux.svg",
                alt: "Linux Logo"
            }
        ]
    },
    {
        title: "Second Project", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dignissimos obcaecati magni iusto mollitia aperiam a id ipsa tempora ad eum numquam assumenda expedita consectetur consequuntur voluptatem facere, perspiciatis accusamus.",
        technologies: [
            {
                src: "c.svg",
                alt: "C Logo"
            },
            {
                src: "linux.svg",
                alt: "Linux Logo"
            }
        ]
    }
];

function Projects() {
    return(
        <section id="Projects" aria-label="My Projects">
            <h2 className={styles.title}>Projects</h2>
            <hr className={styles.line}/>
            <div className={styles.projects}>
                {
                    projects.map((project, index) => (
                        <Project 
                            key={index} 
                            title={project.title} 
                            description={project.description} 
                            technologies={project.technologies}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Projects