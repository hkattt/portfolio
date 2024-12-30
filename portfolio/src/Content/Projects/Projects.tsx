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
                alt: "Globe Icon",
                title: "Globe icon from SVG Repo by pixelbazaar under CC Attribution License"
            },
            {
                link: "https://github.com/hkattt/interrogation",
                src: "github.svg",
                alt: "GitHub Logo",
                title: "GitHub icon from Simple Icons"
            },
        ],
        description: <>
            Interrogation is a murder-mystery game created for <a href="https://itch.io/jam/game-off-2024" target="_blank" rel="noopener noreferrer">GitHub Game Off 2024</a>.
        </>,
        technologies: [
            {
                src: "godotengine.svg",
                alt: "Godot Engine Logo",
                title: "Godot Engine icon from Simple Icons under CC-BY-4.0 license"
            }
        ]
    },
    {
        title: "Fast Paint Texture", 
        links: [
            {
                link: "https://github.com/hkattt/fast-paint-texture",
                src: "github.svg",
                alt: "Github Logo",
                title: "GitHub icon from Simple Icons"
            },
        ],
        description: <>
            Reimplemented Aaron Hertzmann's Fast Paint Texture algorithm. The program generates images with a hand-painted appearance from a provided source image.
        </>,
        technologies: [
            {
                src: "cplusplus.svg",
                alt: "C++ Logo",
                title: "C++ icon from Simple Icons"
            },
            {
                src: "cmake.svg",
                alt: "CMake Logo",
                title: "CMake icon from Simple Icons"
            },
            {
                src: "linux.svg",
                alt: "Linux Logo",
                title: "Linux icon from Simple Icons"
            }
        ]
    },
    {
        title: "Gopher Web Crawler", 
        links: [
            {
                link: "https://github.com/hkattt/gopher-web-crawler",
                src: "github.svg",
                alt: "Github Logo",
                title: "GitHub icon from Simple Icons"
            },
        ],
        description: <>
            Implemented a web crawler for the Gopher internet protocol using standard library networking imports.
        </>,
        technologies: [
            {
                src: "rust.svg",
                alt: "Rust Logo",
                title: "Rust icon from Simple Icons"
            },
        ]
    }
];

function Projects() {
    return(
        <section id="Projects" aria-label="My Projects" className={styles.projects}>
            <div className={styles.content}>
                <Title title="Projects"/>
                <p className={styles.text}>A showcase of some of the projects that I have built.</p>
                <div className={styles.projectsGrid}>
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
            </div>
            <img className={styles.wave} src="waves/projects-bottom-dark.svg" alt="Project section bottom waves"/>
        </section>
    )
}

export default Projects