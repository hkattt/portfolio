import styles from "./Projects.module.css"

import Project from "./Project/Project.tsx"

const projects = [
    {
        title: "Interrogation", 
        img: <img src="interrogation.png" alt="Interrogation art"/>,
        links: [
            {
                link: "https://itch.io/jam/game-off-2024/rate/3148097",
                text: "View Online"
            },
            {
                link: "https://github.com/hkattt/interrogation",
                text: "View GitHub"
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
        img: <img src="fast-paint-texture.png" alt="Fast paint texture artwork"/>,
        links: [
            {
                link: "https://github.com/hkattt/fast-paint-texture",
                text: "View GitHub"
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
        img: null,
        links: [
            {
                link: "https://github.com/hkattt/gopher-web-crawler",
                text: "View GitHub"
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
                <div className={styles.projectsGrid}>
                    {
                        projects.map((project, index) => (
                            <Project 
                                key={index} 
                                links={project.links}
                                title={project.title} 
                                img={project.img}
                                description={project.description} 
                                technologies={project.technologies}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects