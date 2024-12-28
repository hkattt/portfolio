import styles from "./Projects.module.css"

import Project from "./Project/Project.tsx"
import Title from "../Title/Title.tsx"

const projects = [
    {
        title: "Interrogation", 
        links: [
            {
                link: "https://itch.io/jam/game-off-2024/rate/3148097",
                src: "globe.svg",
                alt: "Globe Icon"
            },
            {
                link: "https://github.com/hkattt/interrogation",
                src: "github.svg",
                alt: "Github Logo"
            },
        ],
        description: <>
            Interrogation is a murder-mystery game created for <a href="https://itch.io/jam/game-off-2024" target="_blank" rel="noopener noreferrer">GitHub Game Off 2024</a>.
        </>,
        technologies: [
            {
                src: "godotengine.svg",
                alt: "Godot Engine Logo"
            }
        ]
    },
    {
        title: "Fast Paint Texture", 
        links: [
            {
                link: "https://github.com/hkattt/fast-paint-texture",
                src: "github.svg",
                alt: "Github Logo"
            },
        ],
        description: <>
            Reimplemented Aaron Hertzmann's Fast Paint Texture algorithm. The program generates images with a hand-painted appearance from a provided source image.
        </>,
        technologies: [
            {
                src: "cplusplus.svg",
                alt: "C++ Logo"
            },
            {
                src: "cmake.svg",
                alt: "CMake Logo"
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
            <Title title="Projects"/>
            <div className={styles.projects}>
                {
                    projects.map((project, index) => (
                        <Project 
                            key={index} 
                            links={project.links}
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