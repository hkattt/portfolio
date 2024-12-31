import styles from "./Experiences.module.css"

import Experience from "./Experience/Experience.tsx"

const experiences = [
    {
        jobTitle: "Digital Cadet", 
        date: "Oct 2024 - Present",
        organisation: "GovTEAMS", 
        organisationLink: "https://www.govteams.gov.au/",
        description: <>
            Worked as a digital cadet at GovTEAMS
            UPDATE UPDATE
        </>,
    },
    {
        jobTitle: "IT Service Desk Agent", 
        date: "Feb 2023 - Feb 2024",
        organisation: "Department of Employment and Workplace Relations",
        organisationLink: "https://www.dewr.gov.au/",
        description: <>
            Worked as a service desk agent at GovTEAMS
            UPDATE UPDATE
        </>,
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
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Experiences