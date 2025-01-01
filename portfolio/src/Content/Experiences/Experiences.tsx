import styles from "./Experiences.module.css"

import Experience from "./Experience/Experience.tsx"

const experiences = [
    {
        jobTitle: "Digital Cadet", 
        date: "Oct 2024 - Present",
        organisation: "GovTEAMS", 
        organisationLink: "https://www.govteams.gov.au/",
        description: <>
            Working as a junior full-stack developer contributing to the React frontend and .NET backend. 
            TODO UPDATE
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
        ]
    },
    {
        jobTitle: "IT Service Desk Agent", 
        date: "Feb 2023 - Feb 2024",
        organisation: "DEWR",
        organisationLink: "https://www.dewr.gov.au/",
        description: <>
            Assisted DEWR employees with their IT issues via the phone and text chat. Directed external clients to the appropriate line while operating
            the switchboard. Trained new service desk employees. 
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