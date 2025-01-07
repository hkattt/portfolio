import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import styles from "./page.module.scss";

export default function Main() {
  return (
    <>
      <main className={styles.portfolio}>
        <Hero></Hero>
        <Project
          image={{
            src: "/interrogation.png",
            alt: "Interrogation background art"
          }}
          title="Interrogation"
          description="Created a murder-mystery game called Interrogation for GitHub Game Off 2024."
          links={[
            {
              title: "Play Online",
              href: "https://itch.io/jam/game-off-2024/rate/3148097"
            },
            {
              title: "View GitHub",
              href: "https://github.com/hkattt/interrogation"
            }
          ]}
          technologies={[
            "Godot Engine"
          ]}
        ></Project>
        <Experience
          title="Digital Cadet"
          date="Oct 2024 - Present"
          organisation= {{
            title: "GovTEAMS",
            href: "https://www.govteams.gov.au/"
          }}
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
