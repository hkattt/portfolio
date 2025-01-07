import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import styles from "./page.module.scss";

export default function Main() {
  return (
    <>
      <main className={styles.portfolio}>
        <Hero></Hero>
        <Experience
          title="Digital Cadet"
          date="Oct 2024 - Present"
          organisation="GovTEAMS"
          organisationLink="https://www.govteams.gov.au/"
          description="I am currently working as a junior software developer contributing to the React frontend and .NET backend."
          technologies={[
            ".NET", "React", "Azure", "Figma"
          ]}
        ></Experience>
      </main> 
      <Footer></Footer>
    </>
  )
}
