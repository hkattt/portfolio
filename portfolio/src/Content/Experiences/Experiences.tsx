import styles from "./Experiences.module.css"

import Experience from "./Experience/Experience.tsx"

const experiences = [
    {
        jobTitle: "Digital Cadet", 
        date: "Oct 2024 - Present",
        organisation: "GovTEAMS", 
        organisationLink: "https://www.govteams.gov.au/",
        description: <>
            I am currently working as a junior software developer contributing to the React frontend and .NET backend. 
        </>,
        technologies: [
            {
                src: "dotnet.svg",
                alt: ".NET Logo",
                title: ".NET icon from Simple Icons under CC0-1.0"
            },
            {
                src: "react.svg",
                alt: "React Logo",
                title: "React icon from Simple Icons"
            },
            {
                src: "figma.svg",
                alt: "Figma Logo",
                title: "Figma icon from Simple Icons"
            }
        ]
    },
    {
        jobTitle: "IT Service Desk Agent", 
        date: "Feb 2023 - Feb 2024",
        organisation: "DEWR",
        organisationLink: "https://www.dewr.gov.au/",
        description: <>
            Assisted internal employees with their IT issues, directed external clients to the appropriate line while operating the switchboard, and trained new service desk agents. 
        </>,
        technologies: []
    },
];

function Experiences() {
    return(
        <section id="Experiences" aria-label="My Experiences" className={styles.experiences}>
            <div className={styles.content}>
                <div className={styles.experiencesGrid}>
                    {
                        experiences.map((experience, index) => (
                            <Experience 
                                key={index} 
                                jobTitle={experience.jobTitle} 
                                date={experience.date}
                                organisation={experience.organisation}
                                organisationLink={experience.organisationLink}
                                description={experience.description} 
                                technologies={experience.technologies}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Experiences